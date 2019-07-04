import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'page-contact',
  segment: 'contact'
})

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    company = {
      name: 'Peace Mass Transit',
      profileImage: 'assets/imgs/logo-round.png',
      coverImage: 'assets/imgs/background-5.jpg',
      occupation: 'Transport',
      location: 'Nigeria',
      description: 'Safe and affordable travelling experience',
      address: 'No. 8 - 12 Peace Factory Rd. Emene, Enugu, Nigeria',
      phone: '234 700 732 2362',
      sms: '0703 4157 751',
      email: 'contact@peacegroup.ng',
      whatsapp: '234 703 415 7751',
    };

  constructor(public navCtrl: NavController) {

  }

}
