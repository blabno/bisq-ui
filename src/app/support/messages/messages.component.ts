import _ from 'lodash';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SupportDAO} from "../../shared/DAO/support.dao";

@Component({
  selector: 'app-support-messages',
  templateUrl: 'messages.component.html'
})
export class MessagesComponent implements OnDestroy, OnInit {
  @ViewChild('endMessages') endMessages;

  private paramSubscribe;
  id;
  isGettingMessages = false;
  messages = [];
  newMessage = '';

  constructor(private activeRoute: ActivatedRoute,
              private supportDao:SupportDAO) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getMessages();
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  getMessages() {
    if(!this.id) {
      return;
    }
    this.isGettingMessages = true;
    this.scrollToEndMessages();
    this.supportDao.getMessages(this.id).then((res:any) => {
      this.messages = _.sortBy(res, o => new Date(o.date));
      this.isGettingMessages = false;
      this.scrollToEndMessages();
    });
  }
  sendMessage() {
    this.supportDao.send(this.newMessage, this.id);
    this.getMessages();
    this.newMessage = '';
  }

  private scrollToEndMessages() {
    setTimeout(()=> {
      this.endMessages.nativeElement.scrollIntoView();
    });
  }
}
