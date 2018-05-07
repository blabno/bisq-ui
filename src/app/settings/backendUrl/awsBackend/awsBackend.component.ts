import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';
import moment from 'moment';

import {AppDAO} from '../../../shared/DAO/app.dao';
import {AwsApiService} from '../awsApi.service';
import {SettingsService} from '../../../shared/services/settings.service';
import {ToastService} from '../../../shared/services/toast.service';
import t from '../../../shared/defineTextToTranslate';


@Component({
  selector: 'app-aws-backend',
  templateUrl: 'awsBackend.component.html'
})
export class AwsBackendComponent implements OnInit, OnDestroy {
  @Output() onAwsIpLoaded = new EventEmitter<string>();
  @Output() onAwsApiReady = new EventEmitter<string>();

  progressbarInterval;
  progressbarValue;
  isProgressbarDanger = false;
  isDeleteVisible = false;
  isAwsAvailable = true;
  isAwsBackendAvailable = true;
  isAwsCredentialsVisible = false;
  isAwsCreatingInProgress = false;
  awsBackendStatus = '...';

  constructor(private alertCtrl: AlertController,
              private appDAO: AppDAO,
              private awsApi: AwsApiService,
              private toast: ToastService,
              private translate: TranslateService,
              public settings: SettingsService) {
  }

  ngOnInit() {
    this.refreshAwsStatus();
    if (this.settings.awsCreateInitDate) {
      this.handleCreateProgressbar(this.settings.awsCreateInitDate, moment.duration(5, 'minutes').valueOf());
    }
    if (this.settings.awsStartInitDate) {
      this.handleCreateProgressbar(this.settings.awsStartInitDate, moment.duration(1.5, 'minutes').valueOf());
    }
  }

  ngOnDestroy() {
    clearInterval(this.progressbarInterval);
  }

  handleCreateProgressbar(initDate, duration) {
    const checkStatus = () => {
      if ('...' === this.awsBackendStatus || this.isDeleteVisible) {
        return;
      }
      this.refreshAwsStatus().then(() => {
        if ('running' === this.awsBackendStatus) {
          clearInterval(this.progressbarInterval);
          this.isDeleteVisible = false;
          this.isProgressbarDanger = false;
        } else {
          this.isDeleteVisible = this.isProgressbarDanger;
          this.isProgressbarDanger = true;
        }
      })
    };

    this.progressbarInterval = setInterval(() => {
      const timeFromInit = moment().diff(moment(initDate)).valueOf();
      this.progressbarValue = timeFromInit / duration * 100;
      if (this.isProgressbarDanger) {
        this.progressbarValue -= 100;
      }
      if (100 < this.progressbarValue) {
        checkStatus();
      }
    }, 1000);
  }

  initCreateAwsBackend() {
    this.isAwsCredentialsVisible = true;
  }

  createAwsBackend() {
    this.isAwsCreatingInProgress = true;
    this.settings.saveSettings();
    this.awsApi.describeStack()
      .then(() => this.refreshAwsStatus())
      .then(() => {
        this.isAwsCreatingInProgress = false;
        this.isAwsCredentialsVisible = false;
        this.toast.show(t('SETTINGS.AWS_BACKEND.ALREADY_EXIST'), 'success')
      })
      .catch(() => this.awsApi.createStack()
        .then(() => this.refreshAwsStatus())
        .then(() => {
          this.settings.awsCreateInitDate = moment().valueOf();
          this.isAwsCreatingInProgress = false;
          this.isAwsCredentialsVisible = false;
          this.handleCreateProgressbar(this.settings.awsCreateInitDate, moment.duration(5, 'minutes').valueOf());
          this.settings.saveSettings();
        })
        .catch(error => {
          this.isAwsCreatingInProgress = false;
          this.isAwsCredentialsVisible = false;
          this.toast.error(error)
        }))
  }

  startAwsBackend() {
    this.awsApi.startInstance(this.settings.backendEC2InstanceId)
      .then(() => this.refreshAwsStatus())
      .then(() => {
        this.settings.awsStartInitDate = moment().valueOf();
        this.settings.saveSettings();
        this.handleCreateProgressbar(this.settings.awsStartInitDate, moment.duration(1.5, 'minutes').valueOf());
        this.toast.show(t('SETTINGS.AWS_BACKEND.STARTED'), 'success');
      })
      .catch(error => this.toast.error(error));
  }

  stopAwsBackend() {
    this.awsApi.stopInstance(this.settings.backendEC2InstanceId)
      .then(() => this.refreshAwsStatus())
      .then(() => this.toast.show(t('SETTINGS.AWS_BACKEND.STOPPED'), 'success'))
      .catch(error => this.toast.error(error));
  }

  deleteAwsBackend() {
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: this.translate.instant('SETTINGS.AWS_BACKEND.DELETE_CONFIRMATION'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('CONFIRM'),
          handler: () => {
            this.awsApi.deleteStack()
              .then(() => this.refreshAwsStatus())
              .then(() => {
                this.awsBackendStatus = t('SHARED.DELETING');
                this.isDeleteVisible = false;
                this.isProgressbarDanger = false;
                this.settings.awsCreateInitDate = 0;
                this.settings.awsStartInitDate = 0;
                this.settings.saveSettings();
                this.toast.show(t('SETTINGS.AWS_BACKEND.DELETED'), 'success');
              })
              .catch(error => this.toast.error(error));
          }
        }
      ]
    }).present();
  }

  refreshAwsStatus() {
    if (!this.settings.awsAccessKeyId || !this.settings.awsSecretAccessKey) {
      this.isAwsAvailable = true;
      this.isAwsBackendAvailable = false;
      return
    }
    this.awsBackendStatus = '...';
    return this.awsApi.describeStack()
      .then(result => {
        this.isAwsAvailable = true;
        this.isAwsBackendAvailable = true;
        const outputs = result.DescribeStacksResponse.DescribeStacksResult.Stacks.member.Outputs;
        if (!outputs) {
          return;
        }
        this.settings.backendEC2InstanceId = outputs.member[0].OutputValue._text;
        this.settings.backendEC2InstanceIP = outputs.member[1].OutputValue._text;
        this.settings.saveSettings();
        this.onAwsIpLoaded.emit(`http://${this.settings.backendEC2InstanceIP}`);
        return this.awsApi.describeInstance(this.settings.backendEC2InstanceId);
      })
      .then((result) => {
        const status = _.get(result, 'DescribeInstancesResponse.reservationSet.item.instancesSet.item.instanceState.name._text');
        const statusMap = {
          creating: t('SHARED.CREATING'),
          initializing: t('SHARED.INITIALIZING'),
          running: t('SHARED.RUNNING'),
          pending: t('SHARED.STARTING'),
          stopping: t('SHARED.STOPPING'),
          stopped: t('SHARED.STOPPED'),
          terminated: t('SHARED.DELETING'),
          'shutting-down': t('SHARED.DELETING'),
        };
        if ('running' === status) {
          return this.appDAO.checkAvailability(`http://${this.settings.backendEC2InstanceIP}`)
            .then(() => (this.awsBackendStatus = statusMap.running))
            .catch(() => (this.awsBackendStatus = statusMap.initializing))
        } else {
          this.awsBackendStatus = statusMap[status] || statusMap.creating;
        }
      })
      .then(() => {
        if ('SHARED.RUNNING' === this.awsBackendStatus) {
          if (this.settings.awsCreateInitDate || this.settings.awsStartInitDate) {
            this.onAwsApiReady.emit(`http://${this.settings.backendEC2InstanceIP}`);
          }
          this.isDeleteVisible = false;
          this.settings.awsCreateInitDate = 0;
          this.settings.awsStartInitDate = 0;
          this.settings.saveSettings();
        }
      })
      .catch(error => {
        if (400 !== error.status) {
          this.toast.error(error);
        }
        this.isAwsAvailable = true;
        this.isAwsBackendAvailable = false;
      });
  }
}
