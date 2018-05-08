import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @ViewChild('navbarToggler') navbarToggler;

  sectionTitle = ['MENU.ACCOUNT', 'ACCOUNT.SUBMENU.CURRENCY_ACCOUNTS', 'ACCOUNT.SUBMENU.BACKUP'];

  onMenuItemClick() {
    if (992 > window.innerWidth) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
