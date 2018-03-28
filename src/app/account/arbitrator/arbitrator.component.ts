import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../shared/services/settings.service';
import {ArbitratorsDAO} from '../../shared/DAO/arbitrators.dao';
import _ from 'lodash';

@Component({
  selector: 'app-arbitrator',
  templateUrl: 'arbitrator.component.html'
})
export class ArbitratorComponent implements OnInit {
  public languages = ['Polish', 'English'];
  public arbitrators = [];
  public nominatingInProgress;

  constructor(public settings: SettingsService, private arbitratorsDAO: ArbitratorsDAO) {
  }

  ngOnInit() {
    this.arbitratorsDAO.query().then(res => {
      this.arbitrators = _.get(res, 'arbitrators') || [];
    });
  }

  select(address) {
    // this.arbitratorsDAO.select(address);
  }

  nominateYourself() {
    this.nominatingInProgress = true;
    this.arbitratorsDAO.registerYourself(['pl', 'en']).then(() =>{
      this.nominatingInProgress = false;
    });
  }
}
