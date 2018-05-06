import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasukanPage } from '../masukan/masukan';

/**
 * Generated class for the NimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nim',
  templateUrl: 'nim.html',
})
export class NimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NimPage');
  }

  next(){
    this.navCtrl.push(MasukanPage)
  }
}
