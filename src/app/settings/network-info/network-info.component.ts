import Promise from 'bluebird';
import {Component, OnInit} from '@angular/core';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';
import {NetworkDAO} from '../../shared/DAO/network.dao';
import moment from 'moment';
@Component({
  selector: 'app-network-info',
  templateUrl: 'network-info.component.html'
})
export class NetworkInfoComponent implements OnInit {
  public connectedPeers = [
    'sslnjjhnmwllysv4.onion]:8333',
    '[4jyh6llqj264oggs.onion]:8333',
    '[c6ac4jdfyeiakex2.onion]:8333',
    '[r3dsojfhwcm7x7p6.onion]:8333',
    '[i3a5xtzfm4xwtybd.onion]:8333',
    '[3xucqntxp5ddoaz5.onion]:8333'
  ];
  public useTorForBitcoinNetwork = true;
  public relationship;
  public bitcoinStatus = {};
  public p2pNetworkStatus = {};
  public p2pStatus = {};

  constructor(private toast: ToastService, private networkDAO: NetworkDAO) {}

  ngOnInit() {
    Promise.props({
      bitcoin: this.networkDAO.getBitcoinStatus(),
      p2p: this.networkDAO.getP2PNetworkStatus()
    }).then( res => {
      this.bitcoinStatus = res.bitcoin || {};
      this.p2pStatus = res.p2p || {};
    });
  }

  notDoneYet() {
    this.toast.show(t('SHARED.NOT_DONE_YET'), 'info');
  }

  humanizeBytes(size: number) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const val: any = size / Math.pow(1024, i);
    return val.toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
  }

  getDate(date) {
    return moment(date).format('MMM Do YYYY, h:mm A');
  }
}
