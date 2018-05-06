import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarangPage } from './barang';

@NgModule({
  declarations: [
    BarangPage,
  ],
  imports: [
    IonicPageModule.forChild(BarangPage),
  ],
})
export class BarangPageModule {}
