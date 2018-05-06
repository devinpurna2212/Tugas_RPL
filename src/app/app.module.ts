import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SignPage } from '../pages/sign/sign';
import { ProfilPage } from '../pages/profil/profil';
<<<<<<< HEAD
import { BarangPage } from '../pages/barang/barang';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { NimPage } from '../pages/nim/nim';
import { DatasampahPage } from '../pages/datasampah/datasampah';
import { MasukanPage } from '../pages/masukan/masukan';
=======

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data';
import { IonicStorageModule } from '@ionic/storage';

>>>>>>> 23f86c8b493de8d3281ffb35e65583f3d3974857
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignPage,
    ProfilPage,
    BarangPage,
    VolunteerPage,
    NimPage,
    DatasampahPage,
    MasukanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignPage,
    ProfilPage,
    BarangPage,
    VolunteerPage,
    NimPage,
    DatasampahPage,
    MasukanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
