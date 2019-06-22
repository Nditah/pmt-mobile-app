import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import { PmtReservations }  from "../../providers";
import { BookingService } from "../../services";
import { PmtBooking, PmtReservation } from "../../models";

@IonicPage({
  name: 'page-checkout-booking',
  segment: 'checkout-booking/:id'
})

@Component({
  selector: 'page-checkout-booking',
  templateUrl: 'checkout-booking.html'
})
export class CheckoutBookingPage {

  public reservation: PmtReservation;
  public bookingData: PmtBooking;
  public vehicleLogo: string = '/assets/img/bus-logo.jpg';
  public bgImage: string = '/assets/img/background-1.jpg';
  
  public metadata: any = {};
  public trxref = '' + Math.floor((Math.random() * 1000000000) + 1);

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public bookingService: BookingService,
    private pmtReservations: PmtReservations,
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController) {
      bookingService.getBookingData().then((data) => {
        this.bookingData = data;
        if (!this.bookingData.customer){
          this.navCtrl.setRoot('page-auth');
          return;
        }
        this.setMetaData();
        console.log('this.bookingData ', this.bookingData);
      }).catch(err => console.log(err.message));
  }

  ionViewDidLoad() {
    console.log('CheckoutBookingPage ionViewDidLoad')
  }

  paymentCancel(){
    console.log('Payment cancel');
    this.showFail();
      // this.bookingService.booking();
      // this.nav.setRoot('page-home');
  }

  paymentDone($event: any){
    console.log('Payment done ', $event);
    this.showSuccess(); 
    if($event.status && $event.status === "success") {
      this.reservation = this.getReservation();
      this.pmtReservations.recordCreate(this.reservation)
      .then((data) => {
        if(data.success) {
        const bookingData: PmtBooking = { 
          pmtRoute: null,
          vehicle: null,
          pmtSchedule: null,
          seatPositions: null,
          seatQuantity: 0,
          amount: 0,
          bookingStage: 'page-home',
        };
        this.bookingService.setBookingData(bookingData).then(data => data);
        this.navCtrl.setRoot('page-reservation-list');
      }
      })
      .catch((err) => {
        console.log(err.message);
      })
    }
  }

  // process send button
  showSuccess() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Bus reservation was success!',
      duration: 3000,
      position: 'top',
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      toast.present();      
    }, 3000)
  }

  // process send button
  showFail() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Book was not success!',
      duration: 3000,
      position: 'bottom',
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      toast.present();
    }, 3000)
  }

  setMetaData() {
    this.metadata = {
      custom_fields: [
          {
            display_name: "Amount Paid",
            variable_name: "amount",
            value: this.bookingData.amount,
          },
          {
            display_name: "Transaction Ref",
            variable_name: "trxref",
            value: this.trxref,
          },
          {
              display_name: "Terminal From",
              variable_name: "terminalFrom",
              value: this.bookingData.pmtRoute.terminal1_id,
          },
          {
            display_name: "PMT Route",
            variable_name: "pmt_route_id.name",
            value: this.bookingData.pmtRoute.name,
          },
          {
            display_name: "PMT Route Id",
            variable_name: "pmt_route_id",
            value: this.bookingData.pmtRoute.id,
          },
          {
            display_name: "PMT Schedule",
            variable_name: "pmt_schedule_id",
            value: this.bookingData.pmtSchedule.id,
          },
          {
            display_name: "Seat Positions",
            variable_name: "seat_positions",
            value: this.bookingData.seatPositions,
          },
          {
            display_name: "Seat Quantity",
            variable_name: "seat_quantity",
            value: this.bookingData.seatPositions.length,
          },
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: this.bookingData.customer.phone,
          },
          {
            display_name: "Customer Name",
            variable_name: "customer.name",
            value: `${this.bookingData.customer.surname} ${this.bookingData.customer.other_name}`,
          },
      ]}
    }

    getReservation(): PmtReservation {
      let desc = `Paid ${this.bookingData.amount}`;
      desc += `for ${this.bookingData.seatQuantity} seats`;
      desc += `for ${this.bookingData.pmtRoute.name} seats`;
      return {
          amount: this.bookingData.amount,
          description: desc,
          transaction_code: this.trxref,
          customer_id: this.bookingData.customer.id,
          pmt_schedule_id: this.bookingData.pmtSchedule.id,
          pmt_route_id: this.bookingData.pmtRoute.id,
          seat_quantity: this.bookingData.seatQuantity,
          seat_positions: this.bookingData.seatPositions,
          payment_method: 'GATEWAY',
          payment_gateway: 'PAYSTACK',
          //payment_status: 'SUCCESSFUL',
          //reservation_status: 'BOARDED',
          gateway_transaction: { currency: 'NGN' },
        }
    }
}
