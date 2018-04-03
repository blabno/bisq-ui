import {Component, OnInit} from '@angular/core';
import {SupportDAO} from "../shared/DAO/support.dao";

@Component({
  selector: 'app-support',
  templateUrl: 'support.component.html'
})
export class SupportComponent implements OnInit {
  list = [];
  loading:boolean;

  constructor(private supportDao: SupportDAO) {
  }

  ngOnInit() {
    this.loading = true;
    this.supportDao.query().then((res:any) => {
      this.list = res;
      this.loading = false;
    })
  }

}
