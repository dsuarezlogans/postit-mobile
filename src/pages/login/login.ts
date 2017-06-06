import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthService } from '../../providers/auth-service';
import { InfoService } from '../../providers/info-service';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginCredentials = { username: '', password: '' };

  constructor(private navCtrl: NavController, private platform: Platform, private navParams: NavParams,
    private info: InfoService, private storage: Storage, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  public login() {
    this.info.showLoading();

    this.platform.ready().then(() =>{

      this.auth.login(this.loginCredentials).subscribe(res => {

        if (res.success) {
          this.storage.set('fullName', res.fullName);
          this.storage.set('token', res.token);
          
          this.info.presentToast('Bienvenido! ' + res.fullName);
          this.info.loading.dismiss();
          this.navCtrl.setRoot('HomePage');
        } else {

          this.info.showError(res.message);
        }
      },
        error => {

          this.info.showError(JSON.parse(error._body).message);
        });

    });

  }

}
