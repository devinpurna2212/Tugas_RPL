import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { SearchPipe } from '../../pipes/search';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-barang',
  templateUrl: 'barang.html',
})
export class BarangPage {
  person;
  items: string[];
  searching: any = false;
  searchTerm: string = '';
  searchControl: FormControl;
  found: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private loadingCtrl:LoadingController, private alertCtrl: AlertController, private data:Data) {
      this.searchControl = new FormControl();
  }

  onSearchInput(){
    this.searching = true;
  }

  ionViewDidLoad(){
    this.searchControl.valueChanges
    .debounceTime(2000)
    .subscribe(search=>{
      this.searching = false;
      this.searchNim();
    });
  }

  searchNim(){
    if(this.searchTerm.length>0){
      let searchItem = {
        'searchKey' : this.searchTerm
      }
      this.person = [];
      let loader = this.loadingCtrl.create({content: 'Searching..'});
      loader.present();
      this.data.searchByNIM(searchItem).subscribe(output=>{
        loader.dismiss();
        if(output.length>0){
          this.found = true;
          this.person = output;
        }else{
          this.found = false;
        }
      }, error=>{
        loader.dismiss();
        this.alertHandler('Error', error);
      })
    }else{
      this.found = false;
    }
    this.searching = false;
  }

  alertHandler(title, messages){
    const alert = this.alertCtrl.create({title:title, message:messages, buttons:['Ok']});
    alert.present();
  }
}
