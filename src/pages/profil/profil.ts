import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { MasukanPage } from '../masukan/masukan';
import { BarangPage } from '../barang/barang';
import { DatasampahPage } from '../datasampah/datasampah';
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
  person;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http, public data:Data,
              public loadingCtrl:LoadingController,public alertCtrl:AlertController, public toastCtrl:ToastController) {
      this.person = navParams.data.item;
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

view(item){
  this.navCtrl.push(DatasampahPage,{item:item});
}
update(item)
{
    this.navCtrl.push(MasukanPage,{item:item});
}

search(){
    this.navCtrl.push(BarangPage)
  }
confirmRemove(item){
  let confirm = this.alertCtrl.create({
    title: 'Konfirmasi',
    message: 'Anda yakin ingin menghapus data '+ item.nim + '?',
    buttons:[
      {
        text: 'Tidak',
        handler: ()=>{
          console.log('do nothing');
        }
      },
      {
        text: 'Ya',
        handler: ()=>{
          this.presentLoading();
          this.removeItem(item);
        }
      }
    ]
  });
  confirm.present();
}
alertHandler(){
  this.loader.dismiss();
  const alert = this.alertCtrl.create({title:'Sukses!', subTitle:'Data berhasil dihapus.', buttons: ['OK']});
  alert.present();
}
onRemove(item){
  this.data.removeByNIM(item).subscribe(output=>{
    this.navCtrl.pop();
    this.alertHandler();
  },error=>{
    this.alertHandler('Error',error);
  })
}
removeItem(item){
  for(let i = 0; i < this.items.length; i++){
    if(this.items[i]==item){
      this.items.splice(i,1);
    }
  }
  this.alertHandler();
}
delete(item)
  {
    let link = 'http://localhost/backend/delete-barang.php';
    this.http.post(link, JSON.stringify({item:this.data.item})).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.alertHandler();
    toast.present();
  });
}

  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();
}
}
