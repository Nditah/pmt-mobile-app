import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'page-faq',
  segment: 'faq'
})

@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html'
})
export class FaqPage {

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
  
    faqPmt = [
      {
          q: "What if I miss my bus?",
          a: "Our tickets are valid for a period of seven days. Just present the initial ticket to our ticketing agents and if there is a change in price, offset the balance. Otherwise, they will issue you a new ticket for the new trip.",
      },
      {
          q: "Can my departure date be changed?",
          a: "Yes. You could request a change in your departure date. Notice must be given via SMS AND EMAIL, A MINIMUM OF 24 HOURS TO THE TIME OF DEPARTURE. Indicate the new date you wish to travel on and await confirmation. On the day of the trip, you are required to be at the ticket counter an hour before departure with the original ticket, and a confirmation of the change. The ticketing officer will issue you a new ticket.",
      },
      {
          q: "Can I book and travel on the same day?",
          a: "YES. You can book and travel on the same day.  You also enjoy the option of paying cash at the counter.",
      },
      {
          q: "How much luggage am I entitled to carry?",
          a: "We encourage passengers to carry as little accompanying luggage as possible for the comfort of other passengers. To this end, passengers are allowed a maximum of a medium sized travel bag. Passengers with luggage which exceeds this capacity will be required to have them sent to their destination via our sister company, Peace Express Services Limited",
      },
      {
          q: "How safe are your payment platforms?",
          a: "The security of the data and finances of passengers who use our online payment platforms is of great importance to us. Our payment platforms are safe and secured with the latest technologies in data and web security. In addition, all payments are secured with various authentication protocols which ensure that the account holder maintains full control over their transactions.",
      },
      {
          q: "When am I eligible for a discount?",
          a: "Coming up soon!",
      },
      {
          q: "How comfortable are your buses?",
          a: "All our buses are safe, well-maintained and fully air-conditioned.",
      },
      {
          q: "How do I locate the PMT park nearest to me?",
          a: "We have our terminals across every major city and town in Nigeria. You can also click [HERE] to view the list of our terminals",
      },
  ];

  constructor(public navCtrl: NavController) {

  }

}
