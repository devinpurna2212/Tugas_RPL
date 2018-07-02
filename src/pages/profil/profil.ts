import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MasukanPage } from '../masukan/masukan';
import { BarangPage } from '../barang/barang';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

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
  items = [];
  loader: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http, public data:Data, public loadingCtrl:LoadingController) {
  }
  
  ngOnInit()
  {
      this.presentLoading();
      this.data.LoadSampah().subscribe(
        data => {
          this.items = data;
          console.log(data);
            this.loader.dismiss();
        },
        err => {
          console.log(err);
        }
    );
  }

 tambah(){
    this.navCtrl.push(MasukanPage)
  }

 
update(item)
{
    this.navCtrl.push(MasukanPage,{item:item});
}

search(){
    this.navCtrl.push(BarangPage)
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();
}
}
