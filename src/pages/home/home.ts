import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SignPage } from '../sign/sign';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alert: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'Succes!',
      subTitle: 'now you are logged in',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.push(ProfilPage);
          }
        }

      ]
    });
    alert.present();
  }

  profil(){
    this.showAlert();
  }

  sign(){
    this.navCtrl.push(SignPage)
  }
}
