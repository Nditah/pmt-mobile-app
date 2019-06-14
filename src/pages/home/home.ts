import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, MenuController, ModalController, PopoverController} from "ionic-angular";
import {NotificationsPage} from "../notifications/notifications";

@IonicPage({
  name: 'page-home',
  segment: 'home',
  priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public nav: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController) {
    // set sample data
    this.menuCtrl.swipeEnable(true, 'authenticated');
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('Home loaded!');
  }

  // // to go account page
  goToAccount() {
    this.nav.push('page-account');
  }

  searchSchedules() {
    this.nav.push('page-schedule-search');
  }

  searchCruises() {
    this.nav.push('page-cruise-search');
  }

  searchFlights() {
    this.nav.push('page-flight-search');
  }

  searchTrains() {
    this.nav.push('page-train-search');
  }

  presentNotifications(myEvent) {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
