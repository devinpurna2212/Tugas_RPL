import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarangPage } from '../barang/barang';
import { VolunteerPage } from '../volunteer/volunteer';
import { NimPage } from '../nim/nim';
import { DatasampahPage } from '../datasampah/datasampah';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  barang(){
    this.navCtrl.push(BarangPage)
  }

  volunteer(){
    this.navCtrl.push(VolunteerPage)
  }

  tambah(){
    this.navCtrl.push(NimPage)
  }

  datasampah(){
    this.navCtrl.push(DatasampahPage)
  }

}
