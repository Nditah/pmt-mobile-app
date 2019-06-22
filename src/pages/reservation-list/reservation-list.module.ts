import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationListPage } from './reservation-list';

@NgModule({
  declarations: [
    ReservationListPage
  ],
  imports: [
    IonicPageModule.forChild(ReservationListPage)
  ],
  exports: [
    ReservationListPage
  ]
})

export class ReservationListPageModule { }
