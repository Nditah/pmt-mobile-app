import { PmtRoute } from './pmt-route';
import { Customer } from './customer';
import { PmtSchedule } from './pmt-schedule';
import { PmtReservation } from './pmt-reservation';
import { Staff } from './staff';

export class PmtBoarding {
  id: string;
  pmt_schedule_id: PmtSchedule; // Schedule Object
  pmt_reservation_id: PmtReservation; // Reservation Object
  pmt_route_id: PmtRoute;
  customer_id: Customer; // Customer Object
  transaction_code?: string;
  payment_status: string;
  payment_method: string;
  payment_gateway?: string;
  seat_quantity: number;
  seat_positions?: Array<any>;
  fare: number;
  destination?: string;
  boarding_status: string;
  created_by?: Staff;
  created_at?: Date;
  updated_by?: Staff;
  updated_at?: Date;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
    }
}

}

export interface PmtBoarding {
  id: string;
  pmt_schedule_id: PmtSchedule; // Schedule Object
  pmt_reservation_id: PmtReservation; // Reservation Object
  pmt_route_id: PmtRoute;
  customer_id: Customer; // Customer Object
  transaction_code?: string;
  payment_status: string;
  payment_method: string;
  payment_gateway?: string;
  seat_quantity: number;
  seat_positions?: Array<any>;
  fare: number;
  destination?: string;
  boarding_status: string;
  created_by?: Staff;
  created_at?: Date;
  updated_by?: Staff;
  updated_at?: Date;
}

