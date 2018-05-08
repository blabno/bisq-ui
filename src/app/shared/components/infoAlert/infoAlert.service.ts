import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class InfoAlertService {

  private alertCtrlInstance;
  private $alertTranslation;

  constructor(private alertCtrl: AlertController, private translate: TranslateService) {
    this.$alertTranslation = null;
  }

  show(params) {
    if (this.$alertTranslation) {
      this.$alertTranslation.unsubscribe();
    }

    let cssClass = '';
    let buttons = [
      {
        text: 'INFO_ALERT_CANCEL',
        role: 'cancel',
        handler: () => {}
      }
    ];
    if (params.cancelButton && params.cancelButton.text) {
      buttons[0] = params.cancelButton;
    }
    if (params.confirmButton && params.confirmButton.text && params.confirmButton.handler) {
      buttons.push(params.confirmButton)
    }
    if (params.type === 'success') {
      cssClass = 'info-alert-success';
    }
    if (params.type === 'danger') {
      cssClass = 'info-alert-danger';
    }

    this.$alertTranslation = this.translate.get(this.getParamsToTranslate(params,buttons)).subscribe(trans => {
      this.alertCtrlInstance = this.alertCtrl.create({
        title: params.title ? trans[params.title] : 'some title',
        message: params.message ? trans[params.message] : 'some msg',
        enableBackdropDismiss: params.enableBackdropDismiss,
        cssClass,
        buttons: this.convertButtonsText(buttons, trans)
      });
      this.alertCtrlInstance.present();
    });
  }

  getParamsToTranslate(params, buttons) {
    return [
      params.title,
      params.message,
      buttons[0].text,
      buttons[1].text
    ]
  }

  convertButtonsText(buttons, translations) {
    const cancelBtn = buttons[0].text;
    const confirmBtn = buttons[1].text;

    if (translations[cancelBtn]) {
      buttons[0].text = translations[cancelBtn];
    }
    if (translations[confirmBtn]) {
      buttons[1].text = translations[confirmBtn];
    }
    return buttons;
  }
}
