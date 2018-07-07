import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { ProfilPage } from '../pages/profil/profil'
import { HomePage } from '../pages/home/home';
import { SignPage } from '../pages/sign/sign';
import { BarangPage } from '../pages/barang/barang';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { NimPage } from '../pages/nim/nim';
import { DatasampahPage } from '../pages/datasampah/datasampah';
import { MasukanPage } from '../pages/masukan/masukan';
import { MenuPage } from '../pages/menu/menu';

import { RestApiProvider } from '../providers/rest-api/rest-api';
import { SearchPipe } from '../pipes/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignPage,
    BarangPage,
    VolunteerPage,
    NimPage,
    DatasampahPage,
    MasukanPage,
    MenuPage,
    ProfilPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignPage,
    BarangPage,
    VolunteerPage,
    NimPage,
    DatasampahPage,
    MasukanPage,
    MenuPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    RestApiProvider
  ]
})
export class AppModule {}
