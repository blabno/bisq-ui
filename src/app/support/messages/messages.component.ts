import _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SupportDAO} from "../../shared/DAO/support.dao";

@Component({
  selector: 'app-support-messages',
  templateUrl: 'messages.component.html'
})
export class MessagesComponent implements OnDestroy, OnInit {
  private paramSubscribe;
  id;
  messages = [];

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
    this.supportDao.getMessages(this.id).then((res:any) => {
      this.messages = _.sortBy(res, 'date');
    });
  }

}
