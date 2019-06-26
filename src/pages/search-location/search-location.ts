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
    bookingService.getBookingData().then((data) => {
      if(!data){
        return;
      }
      this.bookingData = data;
    }).catch(err => console.log(err.message));
  }

  // search by item
  searchBy(terminal: Terminal) {
    if (this.way === 'from') {
      console.log('terminalFrom', terminal);
      this.bookingData.terminalFrom = terminal;
    } else { // * if (this.way === 'to')
      console.log('terminalTo', terminal);
      this.bookingData.terminalTo = terminal;
    }
    this.bookingService.setBookingData(this.bookingData)
    .then(data => data)
    .catch((err) => console.log('Error ', err.message));
    // this.nav.push(SearchCarsPage);
    this.navCtrl.pop();
  }
}
