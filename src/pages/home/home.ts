import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SignPage } from '../sign/sign';
import { ProfilPage } from '../profil/profil';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any = {};

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, ) {
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

  login(){
    var link = 'http://localhost/backend/login.php';
      var newLogin = JSON.stringify({username: this.data.username, password: this.data.password});
      // console.log(newLogin);
      this.http.post(link, newLogin).subscribe(data => {
        let response = data.json();
        // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        console.log(response);
        if(response.status == "200"){
          this.navCtrl.push(ProfilPage);
        } else {
          // If account not found
        }
      }, error => {
        console.log("Oooops!");
      });
  }
  }
