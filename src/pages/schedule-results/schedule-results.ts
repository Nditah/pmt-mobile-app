import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { PmtSchedules } from "../../providers";
import { BookingService } from "../../services";
import { PmtSchedule, PmtBooking } from "../../models";


@IonicPage({
  name: 'page-schedule-results',
  segment: 'schedule-results'
})

@Component({
  selector: 'page-schedule-results',
  templateUrl: 'schedule-results.html'
})

export class ScheduleResultsPage {

  public bookingData: PmtBooking;
  public schedules: Array<PmtSchedule>;
  public vehicleLogo: string = '/assets/img/bus-logo.jpg';

  constructor(public navCtrl: NavController,
    public bookingService: BookingService,
    public pmtSchedules: PmtSchedules) {
      bookingService.getBookingData().then((data) => {
        this.bookingData = data;
        console.log('this.bookingData ', this.bookingData);
      }).catch(err => console.log(err.message));

      this.schedules = this.pmtSchedules.query();
      console.log(this.schedules);
  }

  ionViewDidLoad() {
    console.log('ScheduleResultsPage ionViewDidLoad')
  }

  // viewDetail
  chooseSchedule(schedule) {
    const bookingData: PmtBooking = { 
      pmtSchedule: schedule, 
      pmtRoute: schedule.pmt_route_id,
      bookingStage: 'page-schedule-detail',
    };
    this.bookingService.setBookingData(bookingData).then(data => data);
    this.navCtrl.push('page-schedule-detail', { 'id': schedule.id });
  }

  seatsAvailable(schedule: PmtSchedule): number {
    try {
      const totalSeats = schedule.vehicle_id ? schedule.vehicle_id.seating_capacity : 0;
      const reserveArray = schedule.pmt_reservation_ids ? schedule.pmt_reservation_ids : [];

      let seatPositions = [];
      reserveArray.forEach(reserve => {
        seatPositions = seatPositions.concat(reserve.seat_positions);
      });
      return totalSeats - seatPositions.length;
    } catch(e) {
      console.log(e.message);
    }
  }
}
