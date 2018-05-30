import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasukanPage } from '../masukan/masukan';
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
  public items : Array<any> = [];
  data = [
    {nim: 'G64160000'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http) {
  }
  ionViewWillEnter() : void{
    this.load();
  }
  load() : void{
    this.http
    .get('http://www.wahsampah2.atspace.cc/insert.php')
    .subscribe((data : any) =>
    {
      console.dir(data);
      this.items = data;
    },
    (error : any) =>
    {
      console.dir(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  tambah(){
    this.navCtrl.push(MasukanPage)
  }
  viewEntry(param : any) : void{
    this.navCtrl.push('ProfilPage', param);
  }
}
