import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { CalendarModal, CalendarModalOptions } from "ion2-calendar";
import { SearchLocationPage } from "../search-location/search-location";
import { PmtSchedules } from "../../providers";
import { BookingService } from "../../services";
import { ApiResponse, PmtBooking } from "../../models";
import { nextDate } from "../../helpers";

@IonicPage({
  name: 'page-schedule-search',
  segment: 'schedule-search',
  priority: 'high'
})

@Component({
  selector: 'page-schedule-search',
  templateUrl: 'schedule-search.html'
})

export class ScheduleSearchPage {

  public bookingData: PmtBooking;
  
  selectDateOptions = [
    nextDate(1).toISOString().substr(0, 10),
    nextDate(2).toISOString().substr(0, 10),
    nextDate(3).toISOString().substr(0, 10),
];
  constructor(public navCtrl: NavController,
    public bookingService: BookingService,
    public pmtSchedules: PmtSchedules,
    public modalCtrl: ModalController) {
      bookingService.getBookingData().then((data) => {
        if(!data){
          return;
        }
        this.bookingData = data;
        console.log('this.bookingData ', this.bookingData);
      }).catch(err => console.log(err.message));
  }

  ionViewDidLoad() {
    console.log('ScheduleSearchPage ionViewDidLoad')
  }

  ionViewWillEnter() {
    if(this.bookingData) {
      if (this.bookingData.hasOwnProperty('terminalFrom')) {
        // this.search.terminalFrom = this.bookingData.terminalFrom;
      }
      if (this.bookingData.hasOwnProperty('terminalTo')) {
        // this.search.terminalTo = this.bookingData.terminalTo;
      }
    }
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'single',
      title: 'Range Date'
    };
    const myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();
    myCalendar.onDidDismiss((date: any, type: string) => {
      if (date !== null) {
        this.bookingData.boardingDate = new Date(new Date(date.time)).toLocaleString().split(',')[0]
      }
    });
  }

  // choose place
  chooseTerminal(way: string) {
    //* way == 'from' | 'to'
    this.navCtrl.push(SearchLocationPage, way);
  }

  // go to result page
  doSearch() {
    this.navCtrl.push('page-schedule-results');
  }

  onSubmit() {
    if (this.bookingData.terminalFrom.id !== this.bookingData.terminalTo.id) {
        let payload = `boarding_date=${this.bookingData.boardingDate}`;
        payload += `&terminal1_id=${this.bookingData.terminalFrom.id}`;
        payload += `&terminal2_id=${this.bookingData.terminalTo.id}`;
        payload += `&seat_quantity=${1}`;
        console.log('payload =>', payload);
        const bookingData: PmtBooking = {
          terminalFrom: this.bookingData.terminalFrom,
          terminalTo: this.bookingData.terminalTo,
          boardingDate: this.bookingData.boardingDate,
          bookingStage: 'page-schedule-results',
        }
        this.bookingService.setBookingData(bookingData).then(data => data);
        this.pmtSchedules.recordRetrieve(`?${payload}`)
            .then((response: ApiResponse) => {
            if (response.payload.length > 0) {
              this.navCtrl.push('page-schedule-results');
            } else {
              // toast present error
            }
        }).catch((error) => {
              // toast present error
            });

    } else {
              // toast present error
    }
  }

}

//
