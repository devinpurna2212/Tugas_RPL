import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SignPage } from '../pages/sign/sign';
import { ProfilPage } from '../pages/profil/profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignPage,
    ProfilPage
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
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
