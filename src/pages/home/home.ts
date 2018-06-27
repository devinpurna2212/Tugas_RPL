import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { SignPage } from '../sign/sign';
import { ProfilPage } from '../profil/profil';
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';
import 'rxjs/add/operator/map';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  password:any;

  constructor( public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
      this.testApi();
  }

  login() {
    console.log("Username: "+ this.username);

    console.log("Password: "+ this.password);  }

  onLoadSignPage(){
      this.navCtrl.push(SignPage);
     }

  signIn(){
    if(this.username && this.password){
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();
      let input = {
        username: this.username, 
        password: this.password
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

  testApi(){
    //api
    this.http.get("http://wahsampah2.atspace.cc/config.php").subscribe(data => {
      console.log(data); 
    });
    //api     
  }
}

