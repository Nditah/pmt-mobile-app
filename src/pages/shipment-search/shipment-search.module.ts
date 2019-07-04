import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipmentSearchPage } from './shipment-search';

@NgModule({
  declarations: [
    ShipmentSearchPage
  ],
  imports: [
    IonicPageModule.forChild(ShipmentSearchPage)
  ],
  exports: [
    ShipmentSearchPage
  ]
})

export class ShipmentSearchPageModule { }
