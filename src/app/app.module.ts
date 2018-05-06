import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignPage } from '../pages/sign/sign';
import { ProfilPage } from '../pages/profil/profil';
import { BarangPage } from '../pages/barang/barang';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { NimPage } from '../pages/nim/nim';
import { DatasampahPage } from '../pages/datasampah/datasampah';
import { MasukanPage } from '../pages/masukan/masukan';
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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
