import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';

/**
 * Generated class for the MasukanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masukan',
  templateUrl: 'masukan.html',
})
export class MasukanPage {

  constructor(private alert: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'Succes!',
      subTitle: 'Data Berhasil Disimpan',
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

  save(){
    this.showAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukanPage');
  }

}
