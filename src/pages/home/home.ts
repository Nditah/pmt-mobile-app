import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, MenuController, ModalController, PopoverController} from "ionic-angular";
import {NotificationsPage} from "../notifications/notifications";
import { AuthService } from "../../services";

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
    private authService: AuthService,
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

  searchShipment() {
    this.nav.push('page-shipment-search');
  }

  presentNotifications(myEvent) {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  comingSoon() {
    this.authService.createToast('This feature is coming soon!');
  }

}

//
