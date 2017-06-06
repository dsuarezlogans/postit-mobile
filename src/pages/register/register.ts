import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { InfoService } from '../../providers/info-service';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerCredentials = { firstName: '', lastName: '', username: '', password: '' };

  constructor(public navCtrl: NavController, private auth: AuthService,
    public navParams: NavParams, private info: InfoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  public register() {
    this.info.showLoading();

    this.auth.register(this.registerCredentials).subscribe(res => {
      console.info(this.registerCredentials);
      if (res.success) {
        this.info.loading.dismiss();
        this.info.presentToast('Gracias por registrarse! por favor inicie sesion');
        this.navCtrl.setRoot('LoginPage');
      } else {
        this.info.showError(res.message);
      }
    },
      error => {
        console.log(error)
        this.info.showError(JSON.parse(error._body).message);
      });

  }

}
