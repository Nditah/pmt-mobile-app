import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PmtReservations, PmtBookings }  from "../../providers";
import { PmtReservation } from "../../models";

@IonicPage({
  name: 'page-reservation-list',
  segment: 'reservation-list'
})

@Component({
    selector: 'page-reservation-list',
    templateUrl: 'reservation-list.html'
})
export class ReservationListPage implements OnInit {

  public reservations: Array<PmtReservation> = [];
  public bookings: Array<any> = [];

  constructor(public pmtBookings: PmtBookings, 
    public pmtReservations: PmtReservations) {
    // this.retrieveData();
  }

  ionViewDidLoad() {
    console.log('ReservationListPage ionViewDidLoad');
    this.retrieveData().then();
  }

  ngOnInit(){ 
    
  }

  async retrieveData() {
    const res = await this.pmtReservations.query() || [];
    if(res.length > 0){
    this.reservations = res;
    }
    const bookings = this.pmtBookings.query() || [];
    if(bookings.length > 0){
    this.bookings = bookings;
    }
  }

}
