import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MasukanPage } from '../masukan/masukan';
import { BarangPage } from '../barang/barang';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
/**
 * Generated class for the DatasampahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datasampah',
  templateUrl: 'datasampah.html',
})
export class DatasampahPage {
  person;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http, public data:Data, public loadingCtrl:LoadingController) {
      this.person = navParams.data.item;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DatasampahPage');
  }

}
