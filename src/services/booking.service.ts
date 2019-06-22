import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { PmtBooking } from "../models";


@Injectable()
export class BookingService {

  private bookingData: PmtBooking = {};

  constructor(public storage: Storage) {
    this.bookingData = new PmtBooking('');
  }

  setBookingData(data: PmtBooking) {
    this.bookingData = Object.assign(this.bookingData, data);
    return this.storage.set('bookingData', JSON.stringify(this.bookingData)).then((data) => {
      return this.bookingData;
    }).catch((err) => {
      throw new Error(`Error storing bookingData, ${err}`);
    }); 
  }

  getBookingData() {
    return this.storage.get('bookingData').then((data) => {
      if (!data){
        return this.bookingData = new PmtBooking('');
      }
      // this.bookingData = Object.assign(this.bookingData, JSON.parse(data));
      this.bookingData = Object.assign(this.bookingData, new PmtBooking(JSON.parse(data)));
      return this.bookingData;
    }).catch((err) => {
      throw new Error(`Error restoring bookingData, ${err}`);
    });    
  }

}
