import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,  LoadingController, ToastController, MenuController  } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data';
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

   data:any = {};

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public loadCtrl: LoadingController,
               private alertCtrl: AlertController,
               public toastCtrl: ToastController,
               public menuCtrl: MenuController,
               public http: Http) {
       this.data.nim = '';
       this.data.jumlahkaleng = '';
       this.data.jumlahbotol1 = '';
       this.data.jumlahbotol2 = '';
       this.data.harga = '';
       this.data.dt = '';
       this.data.response = '';
       this.data.tanggalbalik = '';
     this.http = http;
   }

   showAlert() {
     let alert = this.alertCtrl.create({
       title: 'Succes!',
       subTitle: 'Nominal Anda sebesar Rp. 0000,00',
       buttons: [
         {
           text: 'OK',
           handler: () => {
             this.navCtrl.setRoot(ProfilPage);
           }
         }

       ]
     });
     alert.present();
   }

   save(){
     var link = 'http://wahsampah2.atspace.cc/insert.php';
     var newUser = JSON.stringify({nim: this.data.nim, no_barang: this.data.no_barang, ukuran: this.data.ukuran, jumlah: this.data.jumlah, harga: this.data.harga, dt: this.data.dt})
     // console.log(newUser);
     this.http.post(link, newUser).subscribe(data => {
       this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
       // console.log(this.data.response);
       this.showAlert();
   }, error => {
     console.log("Oooops!");
   });
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad MasukanPage');
   }

 }
