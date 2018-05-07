import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import CryptoJS from 'crypto-js';
import convert from 'xml-js';
import moment from 'moment'

import {SettingsService} from '../../shared/services/settings.service';
import {HTTP} from "@ionic-native/http";
import bisqApiAwsTemplate from './bisqApiAws.template';

@Injectable()
export class AwsApiService {
  markets;

  constructor(private settings: SettingsService, private http: HttpClient, private httpNative: HTTP) {

  }

  private getHeaders(host, service, body) {
    const shortDateFormat = 'YYYYMMDD';
    const longDateFormat = 'YYYYMMDD[T]HHmmss[Z]';
    const date = moment.utc();

    function getSigningKey(awsSecretAccessKey, date, region, service) {
      const kDate = CryptoJS.HmacSHA256(date.format(shortDateFormat), "AWS4" + awsSecretAccessKey);
      const kRegion = CryptoJS.HmacSHA256(region, kDate);
      const kService = CryptoJS.HmacSHA256(service, kRegion);
      return CryptoJS.HmacSHA256("aws4_request", kService);
    }

    function getCanonicalRequest(host, body, date) {
      return 'POST\n' +
        '/\n\n' +
        `host:${host}\n` +
        `x-amz-content-sha256:${CryptoJS.SHA256(body).toString()}\n` +
        `x-amz-date:${date.format(longDateFormat)}\n` +
        'x-amz-user-agent:aws-sdk-js/2.225.1 promise\n\n' +
        'host;x-amz-content-sha256;x-amz-date;x-amz-user-agent\n' +
        `${CryptoJS.SHA256(body)}`;
    }

    function getStringToSign(date, service, canonicalRequest) {
      return 'AWS4-HMAC-SHA256\n' +
        `${date.format(longDateFormat)}\n` +
        `${date.format(shortDateFormat)}/us-east-1/${service}/aws4_request\n` +
        `${CryptoJS.SHA256(canonicalRequest)}`;
    }

    function getSignature(signingKey, stringToSign) {
      return CryptoJS.HmacSHA256(stringToSign, signingKey).toString()
    }

    function getAuthorization(awsAccessKeyId, date, service, signature) {
      return `AWS4-HMAC-SHA256 Credential=${awsAccessKeyId}/${date.format(shortDateFormat)}/us-east-1/${service}` +
        `/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-user-agent, Signature=${signature}`
    }

    const signingKey = getSigningKey(this.settings.awsSecretAccessKey, date, 'us-east-1', service);
    const canonicalRequest = getCanonicalRequest(host, body, date);
    const stringToSign = getStringToSign(date, service, canonicalRequest);
    const signature = getSignature(signingKey, stringToSign);
    const authorization = getAuthorization(this.settings.awsAccessKeyId, date, service, signature);

    return {
      'Accept': '*/*',
      'Authorization': authorization,
      // 'Content-Type': 'text/plain; charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Amz-Content-Sha256': CryptoJS.SHA256(body).toString(),
      'X-Amz-Date': date.format(longDateFormat),
      'X-Amz-User-Agent': 'aws-sdk-js/2.225.1 promise'
    };
  }

  private awsRequestMultiplatform(url, body, headers) {
    const platform = document.URL.startsWith('http') ? 'browser' : 'application';
    return Promise.resolve().then(() => {
      if ('browser' === platform) {
        return this.http.post(url, body, {
          headers: new HttpHeaders(headers),
          responseType: 'text'
        }).toPromise();
      } else {
        this.httpNative.setDataSerializer('utf8');
        return this.httpNative.post(url, body, headers)
          .then(result => result.data)
      }
    }).then((result) => convert.xml2js(result, {compact: true}))

  }

  createStack() {
    const service = 'cloudformation';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=CreateStack&Version=2010-05-15&StackName=bisq-api&TemplateBody=${JSON.stringify(bisqApiAwsTemplate)}`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }

  deleteStack() {
    const service = 'cloudformation';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=DeleteStack&Version=2010-05-15&StackName=bisq-api`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }

  describeStack() {
    const service = 'cloudformation';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=DescribeStacks&Version=2010-05-15&StackName=bisq-api`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }

  describeInstance(instanceId) {
    const service = 'ec2';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=DescribeInstances&Version=2016-11-15&InstanceId.1=${instanceId}`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }

  startInstance(instanceId) {
    const service = 'ec2';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=StartInstances&Version=2016-11-15&InstanceId.1=${instanceId}`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }

  stopInstance(instanceId) {
    const service = 'ec2';
    const host = `${service}.us-east-1.amazonaws.com`;
    const body = `Action=StopInstances&Version=2016-11-15&InstanceId.1=${instanceId}`;
    const headers = this.getHeaders(host, service, body);
    return this.awsRequestMultiplatform(`https://${host}`, body, headers)
  }
}
