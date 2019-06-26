import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipmentDetailPage } from './shipment-detail';

@NgModule({
  declarations: [
    ShipmentDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ShipmentDetailPage)
  ],
  exports: [
    ShipmentDetailPage
  ]
})

export class ShipmentDetailModule { }
