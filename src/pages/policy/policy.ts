import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'page-policy',
  segment: 'policy'
})

@Component({
    selector: 'page-policy',
    templateUrl: 'policy.html'
})
export class PolicyPage {

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

  constructor(public navCtrl: NavController) {

  }

}
