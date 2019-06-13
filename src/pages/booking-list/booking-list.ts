import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PmtReservations, PmtBookings }  from "../../providers";
import { PmtReservation } from "../../models";

@IonicPage({
  name: 'page-booking-list',
  segment: 'booking-list'
})

@Component({
    selector: 'page-booking-list',
    templateUrl: 'booking-list.html'
})
export class BookingListPage implements OnInit {

  public reservations: Array<PmtReservation> = [];
  public bookings: Array<any> = [];

  constructor(public pmtBookings: PmtBookings, 
    public pmtReservations: PmtReservations) {
      this.retrieveData();
  }

  ionViewDidLoad() {
    console.log('BookingListPage ionViewDidLoad');
  }

  ngOnInit(){ 
    this.retrieveData();
  }

  retrieveData() {
    const reservations = this.pmtReservations.query() || [];
    if(reservations.length > 0){
    this.reservations = reservations;
    }
    const bookings = this.pmtBookings.query() || [];
    if(bookings.length > 0){
    this.bookings = bookings;
    }
  }

}
