import {Component} from '@angular/core';

@Component({
  selector: 'app-network-info',
  templateUrl: 'network-info.component.html'
})
export class NetworkInfoComponent {
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
  public myOnionAddress = 'vftomyq6q36h2mwj.onion:9999';
  public traffic = "Sent: 41.34MB, received: 34.32 MB"
  constructor() {}
}
