import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Angular4PaystackModule } from 'angular4-paystack';

import { CheckoutBookingPage } from './checkout-booking';

@NgModule({
  declarations: [
    CheckoutBookingPage
  ],
  imports: [
    Angular4PaystackModule,
    IonicPageModule.forChild(CheckoutBookingPage)
  ],
  exports: [
    CheckoutBookingPage
  ]
})

export class CheckoutBookingModule { }
