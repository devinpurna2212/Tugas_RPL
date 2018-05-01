import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { EmailValidator } from '@angular/forms';
/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  @ViewChild('fullname') fullname;
  @ViewChild('email') EmailValidator;
  @ViewChild('uname') uname;
  @ViewChild('password') password;
  constructor(private alert: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'Succes!',
      subTitle: 'Now you could login to our awsomeness!',
      buttons: [
        {
          text: 'login',
          handler: () => {
            this.navCtrl.push(ProfilPage);
          }
        }

      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  registeruser(){
    this.showAlert();
    console.log('Would register user with ', this.fullname.value, this.EmailValidator.value, this.uname.value, this.password.value);
  }


}
