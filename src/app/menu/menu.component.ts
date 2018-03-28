import {Component, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @ViewChild('navbarToggler') navbarToggler;

  sectionTitle;

  constructor(private translate: TranslateService) {
  }

  onMenuItemClick(translatedTags) {
    if (992 > window.innerWidth) {
      this.navbarToggler.nativeElement.click();
    }
    this.sectionTitle = translatedTags.map(item => this.translate.instant(item)).join(' - ');
  }
}
