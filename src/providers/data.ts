import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class Data {

  public BASE_URL = 'http://localhost/backend';
  public HAS_LOGGED_IN = 'status_login';

  constructor(public http: Http, public storage: Storage) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    this.options = new RequestOptions({headers: this.headers});
  }

      LoadSampah() {
        var url = 'http://wahsampah2.atspace.cc/load-barang.php';
        var response = this.http.get(url).map(res => res.json());
        return response;
      }

      login(data: any, role:string) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('user_data', data);
        this.storage.set('role', role);
      };

      logout() {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('user_user');
      };

      isLogin(){
        return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
          return value;
        });
      }

      getRole(){
        return this.storage.get('role').then((value)=>{
          return value;
        });
      }

      getData() {
        return this.storage.get('user_user').then((value) => {
          return value;
      });
    }

    searchByNIM(searchItem){
      return this.http.post(this.url+'/load-barang,php', searchItem, this.options)
      .map(res=>res.json())
      .catch(this.handleError);
    }

    handleError(error){
      return Observable.throw(error.json().error || 'Server Error');
    }

    removeByNIM(item){
      return this.http.get(this.url+'delete-barang.php'+nim, this.options)
      .map(res=>res.json())
      .catch(this.handleError);
    }
}
