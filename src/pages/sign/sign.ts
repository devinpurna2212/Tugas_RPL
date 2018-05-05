import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';


@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  data:any = {};

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public navParams: NavParams, 
              public http: Http) {
    this.data.fullname = '';
    this.data.email = '';
    this.data.username = '';
    this.data.password = '';
    // this.data.password2 = '';
    this.data.response = '';

    this.http = http;
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad SignPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Succes!',
      subTitle: 'Now you could login to our awsomeness!',
      buttons: [{
          text: 'login',
          handler: () => {
            this.navCtrl.push(ProfilPage);
          }
        }]
    });
    alert.present();
  }

  signUp(){
    var link = 'http://localhost/backend/register.php';
    var newUser = JSON.stringify({fullname: this.data.fullname, username: this.data.username, email: this.data.email, password: this.data.password})
    // console.log(newUser);
    this.http.post(link, newUser).subscribe(data => {
      this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      // console.log(this.data.response);
      this.showAlert();
  }, error => {
    console.log("Oooops!");
  });
  }
}