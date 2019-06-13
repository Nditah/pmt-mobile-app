import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingListPage } from './booking-list';

@NgModule({
  declarations: [
    BookingListPage
  ],
  imports: [
    IonicPageModule.forChild(BookingListPage)
  ],
  exports: [
    BookingListPage
  ]
})

export class BookingListPageModule { }
