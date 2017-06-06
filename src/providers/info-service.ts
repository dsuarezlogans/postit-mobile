import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the InfoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InfoService {

  public loading: Loading;

  constructor(public http: Http, private toastCtrl: ToastController,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

 public showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

public showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fallo',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

public presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
