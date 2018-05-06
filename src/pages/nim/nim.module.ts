import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NimPage } from './nim';

@NgModule({
  declarations: [
    NimPage,
  ],
  imports: [
    IonicPageModule.forChild(NimPage),
  ],
})
export class NimPageModule {}
