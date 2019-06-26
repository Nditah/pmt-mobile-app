import { Component } from "@angular/core";
import { IonicPage, NavParams, NavController, ToastController } from "ionic-angular";
import { PmtSchedules } from "../../providers";
import { BookingService } from "../../services";
import { PmtSchedule, PmtBooking } from "../../models";

@IonicPage({
  name: 'page-schedule-detail',
  segment: 'schedule-detail'
})

@Component({
    selector: 'page-schedule-detail',
    templateUrl: 'schedule-detail.html'
})
export class ScheduleDetailPage {

  public vehicleLogo: string = '/assets/img/bus-logo.jpg';
  public emptySeat: string = '/assets/img/seat-black-empty.svg';
  public occupiedSeat: string = '/assets/img/seat-black.png';
  public selectedSeat: string = '/assets/img/seat-blue.png';
  
  param: number;
  public schedule: any;
  public seatPositions: Array<number> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public bookingService: BookingService,
    public scheduleService: PmtSchedules) {
    // set sample data
    this.param = this.navParams.get('id');
    const schedule = this.scheduleService.query({ id: this.param })[0];
    this.schedule = schedule ? schedule: this.scheduleService.query()[0];
    console.log(schedule);
  }

  ionViewDidLoad() {
    console.log('ScheduleDetailPage ionViewDidLoad')
  }

  seatColor(seatNo: number): string {
    return this.isSeatAvailable(seatNo) ? 'green' : 'secondary';
  }
  

  /**
   * @description Select avalibale seat or de-select seats
   * @param seatNo seat to select or de-select from seatPosition array
   */
  selectSeat(seatNo: number) {
    /*
    console.log('Choosing seat ', seatNo);
    console.log('Seat isSeatAvailable ', this.isSeatAvailable(seatNo));
    console.log('Seat isSeatSelected ', this.isSeatSelected(seatNo));
    */
    if (!this.isSeatAvailable(seatNo)){
      return;
    }
    const index = this.seatPositions.indexOf(seatNo);
    if (index >= 0) {
      this.seatPositions.splice(index, 1);
    } else {
      this.seatPositions.push(seatNo);
    }
  }

  /**
   * @description Create an Array of vehicle seats
   * @returns {Array} of seats
   * @param {capacity} vehicle seating capacity | 16 for bus
   */
  getSeats(capacity = 16): Array<number>{
    return Array.from({length: capacity}, (v, k) => k+1); 
  }

  seatsAvailable(schedule: PmtSchedule){
    const totalSeats = schedule.vehicle_id ? schedule.vehicle_id.seating_capacity : 16;
    const reservedSeats = schedule.pmt_reservation_ids ? schedule.pmt_reservation_ids.length : 0;
    return totalSeats - reservedSeats; // available
  }

  isSeatAvailable(seat: number): Boolean{
    const reservedSeats: Array<number> = this.schedule.pmt_reservation_ids || [];
    return !(reservedSeats.some(x => x === seat)); // is it and elt of reservedSeats?
  }

  isSeatSelected(seat: number): Boolean{
    return this.seatPositions.some(x => x === seat); // is it and elt of seatPositions?
  }

  viewSummary(reservation) {
    let toast = this.toastCtrl.create({
      message: 'Here is your booking details',
      cssClass: 'cruiseToast',
      duration: 2000
    });
    toast.present(toast);
  }

  // go to checkout page
  checkout() {
    const bookingData: PmtBooking = { 
      seatPositions: this.seatPositions,
      seatQuantity: this.seatPositions.length,
      amount: this.seatPositions.length * this.schedule.fare,
      bookingStage: 'page-checkout-booking',
    };
    this.bookingService.setBookingData(bookingData).then(data => data);
    this.navCtrl.push('page-checkout-booking');
  }
}
