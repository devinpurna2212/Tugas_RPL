import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ProfilPage } from '../profil/profil';


@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  data:any = {};
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public http: Http) {
    this.data.fullname = '';
    this.data.email = '';
    this.data.username = '';
    this.data.password = '';
    // this.data.password2 = '';
    this.data.response = '';

    this.http = http;
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

  check(){
    if(this.data.name === '' || this.data.username === '' || this.data.email === '' || this.data.password === '' || this.data.repassword === ''){
      let toast = this.toastCtrl.create({
        message: 'Please fill all the data field',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } else if(this.regexp.test(this.data.email) == false) {
      let toast = this.toastCtrl.create({
        message: 'Please check your email address',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } else {
      this.signUp();
    }
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

  ionViewDidLoad(){
    console.log('ionViewDidLoad SignPage');
  }
}