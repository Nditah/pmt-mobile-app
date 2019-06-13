import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'page-support',
  segment: 'support'
})

@Component({
    selector: 'page-support',
    templateUrl: 'support.html'
})
export class SupportPage {

    // Accordion
    shownGroup = null;

    toggleGroup(group) {
      if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
      }
    };
  
    isGroupShown(group) {
      return this.shownGroup === group;
    };
  
  
    accordions = [
      {
        name: 'How to I choose a Seat?',
        description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage.',
      },
      {
        name: 'Can I still be charged for Luggage?',
        description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film),  ',
      },
      {
        name: 'What would happen if I missed my Schedule?',
        description: 'Since the end of the Yugoslav wars, Belgrade has attracted steady investment—its graffiti-covered neighborhoods are now full of restaurants and bars.  ',
      }
    ];

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
