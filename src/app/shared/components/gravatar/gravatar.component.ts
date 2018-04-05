import {Component, Input} from '@angular/core';
import md5 from 'md5'

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html'
})
export class GravatarComponent {
  @Input() hashSeed: string;
  @Input() size: number;

  constructor() {
  }

  getIdenticonUrl() {
    return `https://www.gravatar.com/avatar/${md5(this.hashSeed)}?s=${this.size}&d=identicon&forcedefault=y`;
  }
}
