import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarangPage } from './barang';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { SearchPipe } from '../../pipes/search';

@NgModule({
  declarations: [
    BarangPage,
  ],
  imports: [
    IonicPageModule.forChild(BarangPage),
  ],
})
export class BarangPageModule {}
