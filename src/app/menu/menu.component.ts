import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @ViewChild('navbarToggler') navbarToggler;

  constructor() {
  }

  onMenuItemClick() {
    if (992 > window.innerWidth) {
      this.navbarToggler.nativeElement.click();
    }
  }

}
