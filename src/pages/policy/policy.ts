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
        name: 'Check-in',
        description: `Check-in closes 30 minutes before the estimated time of departure. 
        We recommend that passengers honour our check-in policy as departure time will not be 
        extended and a fee of one thousand Naira (N1000) will be applicable for rescheduling due 
        to lateness or change in travel plans. Please note that rescheduling is subject to vehicle and seat availability.`,
      },
      {
        name: 'Bookings and reservations',
        description: `Bookings and reservations made in advance are subject to availability of vehicles. 
        In the event that we are unable to fulfill your reservation, affected passenger(s) will be rescheduled 
        to another departure time at no extra cost.`,
      },
      {
        name: 'Luggage Allowance',
        description: `
        All passengers are entitled to one medium sized luggage (30"x22"x15) per ticket. For comfort and safety purposes, 
        we are unable to accommodate any luggage with dimensions exceeding this standard. In cases where specific guest(s) 
        luggage exceeds this requirement, affected guests will be asked to either send the excess luggage via our sister company, 
        Peace Express Service Limited, or purchase an extra seat to accommodate it.
        We recommend the use of flexible traveling boxes as plastic boxes are not acceptable on our buses. 
        This is because these boxes are not only fragile but also difficult to manipulate which poses a challenge during luggage loading activities.
        Owing to the embargo placed by the Nigeria Customs on the importation of some food commodities, kindly note that we do not carry bag(s) of rice on board our vehicles. 
        Fragile items such as electronics, laptops and other valuable items are not to be placed in the trunk of our vehicles but carried as hand luggage.
        Please note that hazardous materials such as but not limited to - gas cylinders (empty or with content), generators, building materials, fuel in gallons, agrochemicals, herbicides, pesticides; etc. are not permissible on our vehicles. 
        Please contact Peace Express Service Limited for conveyance of such items.
        Passengers are also advised to monitor their luggage till their final destination.
        `,
      },
      {
        name: 'Refund Policy',
        description: `Peace Mass Transit Limited has a no refund policy for all tickets duly purchased from any of her sales channels.`,
      },
      {
        name: 'Managing Reservations',
        description: `
        Passengers with unused tickets are advised to utilize as soon as possible as ticket validity is restricted to 1 month 
        from date of purchase after which the ticket becomes invalid. To utilize such tickets within the validity period, 
        kindly send an email with new itinerary before proposed travel date.
        Note that all reschedules/ re-routing requests are subject to vehicle and seat availability on desired route.
        In the event that the fare of the new trip is higher than the old trip, the passenger 
        will also be required to pay the differential for reschedule or re-routing request.
        `,
      },
      {
        name: 'Debits without value on online booking',
        description: `Passengers are advised to contact their banks should they require a refund due to double debits and 
        debits on card transactions or USSD payments without value using our online booking platform. 
        Refund request originating from bank transfers can be processed by sending an email to contact@xxxx.com. 
        Once it is confirmed that funds were acquired and the account number to be credited has been provided by guest, 
        a refund will be made within seven (7) to ten (10) working days.
        `,
      },
      {
        name: 'Price Changes',
        description: `Prices are subject to change without prior notice to guests due to unforeseen economic circumstances.
        `,
      },
      {
        name: 'Animals and pets onboard',
        description: `Peace Mass Transit conveys humans and not animals or pets.
        `
      },
      {
        name: 'Carriage of unaccompanied children',
        description: `Peace Mass Transit can only provide transportation for unaccompanied children 
        between the ages of 10 to 15 on the condition that the parent or guardian of the minor completes and
         submits our unaccompanied minor form which can be obtained from any of our terminals nation-wide 
         before the commencement of the trip.
        `
      },
      {
        name: 'Smoking Policy',
        description: `Smoking is prohibited while on board
        `
      },
      {
        name: 'Sale of Tickets',
        description: `PMT bus tickets are not transferable and cannot be resold to anyone else.
        `
      },
      {
        name: 'Departure time',
        description: `While we will do all within our control to ensure we comply with communicated departure times, 
        in cases where unforeseen circumstances occur, please note that we are at liberty to alter the departure time without prior notice or compensation. 
        This may have an effect on seat selection and bus type.
        `
      },
      {
        name: 'Ticket Validity',
        description: `Purchased but un-used tickets not used to travel have a validity of one (1) month from date of purchase, 
        as long as the amount paid for the cancelled journey is not less than the cost of the proposed journey, 
        in the event that it is, you will be required to pay the difference.
        `
      },
      {
        name: 'Lost/Forgotten Items',
        description: `Passengers are advised to monitor their luggage while at our terminals or in our vehicles. 
        Should any item be stolen, lost or forgotten, we will not be held liable. Found but unclaimed properties will be kept for a maximum of 30 days before it is disposed of (except perishable items which will be discarded the same day if unclaimed to prevent contamination)
        `
      },
      {
        name: 'In transit Breakdown',
        description: `As a company, we recognise the importance of preventive maintenance and 
        we practice it religiously to reduce and possibly eliminate in transit breakdowns. 
        However in the event that it does happen, guests are requested to contact our call centre. 
        For swift action, our patrol teams are also strategically located to provide a replacement 
        vehicle within the shortest possible time. In situations where an alternative vehicle is 
        provided by Peace Mass Transit to complete the trip, please note that tickets cannot be reused.
        `
      }
    ];

    //         For queries and enquiries on issues not addressed above, kindly reach our care team via email or mobile using contact@xxx.com or 0805xxxxxxx.

  constructor(public navCtrl: NavController) {

  }

}
