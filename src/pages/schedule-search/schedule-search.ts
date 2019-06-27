import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { CalendarModal, CalendarModalOptions } from "ion2-calendar";
import { SearchLocationPage } from "../search-location/search-location";
import { PmtSchedules } from "../../providers";
import { BookingService, AuthService } from "../../services";
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
    public authService: AuthService,
    public pmtSchedules: PmtSchedules,
    public modalCtrl: ModalController) {
      this.getBookingData();
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

  getBookingData(){
    this.bookingService.getBookingData().then((data) => {
      if(!data){ return; }
      this.bookingData = data;
      console.log('this.bookingData ', this.bookingData);
    }).catch(err => console.log(err.message));
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'single',
      title: 'Range Date'
    };
    const myCalendar = this.modalCtrl.create(CalendarModal, { options: options });
    myCalendar.present();
    myCalendar.onDidDismiss((date: any, type: string) => {
      if (date !== null) {
        this.bookingData.boardingDate = date.string;
      }
    });
  }

  // choose place
  chooseTerminal(way: string) {
    //* way == 'from' | 'to'
    this.navCtrl.push(SearchLocationPage, way);
  }

  search() {
    if (!(this.bookingData.boardingDate &&
      this.bookingData.terminalFrom &&
      this.bookingData.terminalTo)) {
        this.authService.createToast('Please choose your terminals and date');
        return;
      }
    if (this.bookingData.terminalFrom.id !== this.bookingData.terminalTo.id) {
        let payload = `boarding_date=${this.bookingData.boardingDate}`;
        payload += `&terminal1_id=${this.bookingData.terminalFrom.id}`;
        payload += `&terminal2_id=${this.bookingData.terminalTo.id}`;
        // payload += `&seat_quantity=${1}`;
        // console.log('payload =>', payload);
        const bookingData: PmtBooking = {
          terminalFrom: this.bookingData.terminalFrom,
          terminalTo: this.bookingData.terminalTo,
          boardingDate: this.bookingData.boardingDate,
          bookingStage: 'page-schedule-results',
        }
        this.bookingService.setBookingData(bookingData).then(data => data);
        this.pmtSchedules.recordRetrieve(`/reservation?${payload}`)
            .then((response: ApiResponse) => {
            if (response.payload.length > 0) {
              this.navCtrl.push('page-schedule-results');
            } else {
              this.authService.createToast(`No schedule available for ${this.bookingData.terminalFrom.name} =>
              ${this.bookingData.terminalTo.name} @ ${this.bookingData.boardingDate}`);
            }
        }).catch((error) => { this.authService.createToast(error.message) });
    } else {
      this.authService.createToast(`terminalFrom ${this.bookingData.terminalFrom.id} 
      and terminalTo ${this.bookingData.terminalTo.id} should not be the same.`);
    }
  }

}

//
