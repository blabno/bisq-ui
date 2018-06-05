import {Component, OnInit} from '@angular/core';
import {BackupsDAO} from '../../shared/DAO/backups.dao';
import {InfoModalService} from '../../shared/components/infoModal/infoModal.service';
import {chain, trimStart, trimEnd, sortBy} from 'lodash';
import {ToastService} from '../../shared/services/toast.service';
import {InfoAlertService} from '../../shared/components/infoAlert/infoAlert.service';
import {SettingsService} from '../../shared/services/settings.service';

import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-backup',
  templateUrl: 'backup.component.html'
})
export class BackupComponent implements OnInit {

  public loading: boolean = true;
  public list: any = [];

  constructor(private backupsDAO: BackupsDAO,
              private infoModal: InfoModalService,
              private toast: ToastService,
              private infoAlert: InfoAlertService,
              private settings: SettingsService) {
  }

  ngOnInit() {
    this.fetchBackupsList();
  }

  orderBackups(backupsList: Array<string>): Array<string> {
    const parse = (item) => chain(item).trimStart('backup-').trimEnd('.zip').split('-').join('').parseInt().value();
    return sortBy(backupsList, (backup) => parse(backup)).reverse();
  }

  fetchBackupsList() {
    this.backupsDAO.getBackupsList().then((result) => {
      this.list = this.orderBackups(result['backups']);
      this.loading = false;
    }).catch((err) => {
      this.toast.error(err);
      this.list = [];
      this.loading = false;
    })
  }

  createBackup() {
    this.loading = true;
    this.backupsDAO.createBackup().then(() => {
      this.toast.show(t('BACKUPS.BACKUP_CREATED'), 'success');
      this.fetchBackupsList()
    }).catch((err) => this.callError(err));
  }

  uploadBackup(file: File) {
    this.loading = true;
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);

    this.backupsDAO.uploadBackup(formData).then(() => {
      this.toast.show(t('BACKUPS.BACKUP_UPLOADED'), 'success');
      this.fetchBackupsList();
    }).catch((err) => this.callError(err));
  }

  downloadBackup(backup: string) {
    const path = `${this.settings.backendUrl}/api/v1/backups/${backup}`;
    window.open(path, '_system', 'location=yes');
  }

  restoreBackup(backup: string) {
    this.infoAlert.show({
      title: t('BACKUPS.RESTORE_ALERT.TITLE'),
      message: t('BACKUPS.RESTORE_ALERT.TEXT'),
      type: 'danger',
      confirmButton: {
        text: t('BACKUPS.RESTORE_ALERT.BUTTON_PROCEED'),
        handler: () => {
          this.backupsDAO.restoreBackup(backup)
            .then(() => this.toast.show(t('BACKUPS.RESTORE_IN_PROGRESS'), 'success'))
            .catch((err) => this.callError(err));
        }
      }
    });
  }

  deleteBackup(backup: string) {
    this.infoAlert.show({
      title: t('BACKUPS.DELETE_ALERT.TITLE'),
      message: t('BACKUPS.DELETE_ALERT.TEXT'),
      type: 'danger',
      confirmButton: {
        text: t('BACKUPS.RESTORE_ALERT.BUTTON_PROCEED'),
        handler: () => {
          this.loading = true;
          this.backupsDAO.removeBackup(backup)
            .then(() => {
              this.toast.show(t('BACKUPS.BACKUP_DELETED'), 'success');
              this.fetchBackupsList();
            })
            .catch(err => this.callError(err));
        }
      }
    });
  }

  callError(error) {
    this.toast.error(error);
    this.loading = false;
  }
}
