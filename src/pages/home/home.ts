import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController, App, LoadingController } from 'ionic-angular';
import { SignPage } from '../sign/sign';
import { ProfilPage } from '../profil/profil';
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';

import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any = {};

  constructor(public app: App, public loadingCtrl: LoadingController, public dataStorage: DataProvider, public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public toastCtrl: ToastController) {
      this.data.username = "";
      this.data.password = "";
      this.data.response = "";
      this.http = http;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  sign(){
    this.navCtrl.push(SignPage)
  }

  masuk(){
    this.navCtrl.push(ProfilPage);
  }

  login(){
    var link = 'http://localhost/backend/login.php';
      var newLogin = JSON.stringify({username: this.data.username, password: this.data.password});
      
      this.http.post(link, newLogin).subscribe(data => {
        let response = data.json();
        // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        if(response.status == "200"){
         // console.log(response.data);
          this.dataStorage.login(response.data, "user");
          this.loading();
          this.app.getRootNav().setRoot(MyApp);
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

  loading(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
  }
