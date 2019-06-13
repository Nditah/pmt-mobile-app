import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Terminals } from '../../providers'
import { BookingService } from '../../services'
import { PmtBooking, Terminal } from "../../models";


@IonicPage({
  name: 'page-search-location',
  segment: 'search-location'
})

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {

  public terminals: Array<Terminal> = [];
  public bookingData: PmtBooking;
  public way: string;

  constructor(public navCtrl: NavController, 
    public bookingService: BookingService,
    public navParams: NavParams,
    public terminalService: Terminals) {
    this.way = this.navParams.data;
    this.terminals = terminalService.query();
  }

  // search by item
  searchBy(terminal: Terminal) {
    let bookingData: PmtBooking;
    if (this.way === 'from') {
      console.log('terminalFrom', terminal);
      bookingData = { terminalFrom: terminal };
    }
    if (this.way === 'to') {
      console.log('terminalTo', terminal);
      bookingData = { terminalTo: terminal }
    }
    this.bookingService.setBookingData(bookingData)
    .then(data => data)
    .catch((err) => console.log('Error ', err.message));
    // this.nav.push(SearchCarsPage);
    this.navCtrl.pop();
  }
}
