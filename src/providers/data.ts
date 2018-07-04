import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  public BASE_URL = 'http://localhost/backend';
  public HAS_LOGGED_IN = 'status_login';

  constructor(public http: Http ,
              public storage: Storage) {
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

}
