import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController, App, LoadingController, NavParams, MenuController } from 'ionic-angular';
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

  email:any;
  pass:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private data : Data,
              public loadCtrl: LoadingController,
              public alertCtrl: AlertController,
              public http: Http) {
      this.menuCtrl.enable(false);
      this.testApi();
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
     if(this.email && this.pass){
      let loading = this.loadCtrl.create({
        content: 'Loading..'
      });

      loading.present();

      //apiPost
      let input = {
        email: this.email, 
        pass: this.pass
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/login.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(ProfilPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Login Failed',      
            message : 'please try again',
            buttons: ['OK']
          });
          alert.present();
          
      }    
      });
      //apiPost    
}
  }

  loading(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
  testApi(){
    //api
    this.http.get("http://wahsampah2.atspace.cc/config.php").subscribe(data => {
      console.log(data); 
    });
    //api     
}
}
