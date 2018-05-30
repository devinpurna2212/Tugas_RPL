import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController, App, LoadingController, MenuController } from 'ionic-angular';
import { SignPage } from '../sign/sign';
import { ProfilPage } from '../profil/profil';
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  pass:any;

  constructor(
    public app: App,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public http: Http
  ) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loading(){
    let loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

signIn(){
    var link = 'http://wahsampah2.atspace.cc/login.php';
    var newLogin = JSON.stringify({username: this.username, password: this.pass});
     // console.log(newLogin);
    this.http.post(link, newLogin).subscribe(data => {
      let response = data.json();
      // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      if(response.status == "200"){
        // console.log(response.data);
        this.data.login(response.data, "user");
        this.loading();
        this.app.getRootNav().setRoot(ProfilPage);
        //this.navCtrl.setRoot(TabsPage);
      } else {
        // If account not found
        let toast = this.toastCtrl.create({
          message: 'Incorrect username or password',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    }, error => {
      console.log("Oooops!");
    });
}

masuk(){
  this.navCtrl.setRoot(ProfilPage);
}
signUp(){
    this.navCtrl.push(SignPage);
  }

}
