import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipmentListPage } from './shipment-list';

@NgModule({
  declarations: [
    ShipmentListPage
  ],
  imports: [
    IonicPageModule.forChild(ShipmentListPage)
  ],
  exports: [
    ShipmentListPage
  ]
})

export class ShipmentListPageModule { }
