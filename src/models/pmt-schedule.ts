import { PmtRoute } from './pmt-route';
import { Vehicle } from './vehicle';
import { Staff } from './staff';
import { PmtBoarding } from './pmt-boarding';
import { PmtReservation } from './pmt-reservation';

export class PmtSchedule {
    id: string;
    vehicle_id: any; //Vehicle;
    pmt_route_id: any; //PmtRoute;
    boarding_date: Date;
    schedule_status: ScheduleStatus;
    is_reservable: boolean;
    is_full: boolean;
    is_loaded: boolean; // checked
    is_waybilled: boolean; // settled
    is_departed: boolean;
    is_arrived: boolean;
    departure_date: Date;
    arrival_date: Date;
    loaded_by: Staff; // checked_by" },
    waybilled_by: Staff; // settled_by" },
    pmt_reservation_ids: Array<any>; //Array<PmtReservation>;
    pmt_boarding_ids: Array<any>; //Array<PmtBoarding>;
    total_payout: number;
    fare_total: number;
    fuel_amount: number;
    driver_allowance: number;
    is_dto: boolean;
    dto_maintenance: number;
    dto_repayment: number;
    dto_service_charge: number;
    remark: string;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface PmtSchedule {
    id: string;
    vehicle_id: any; //Vehicle;
    pmt_route_id: any; //PmtRoute;
    boarding_date: Date;
    schedule_status: ScheduleStatus;
    is_reservable: boolean;
    is_full: boolean;
    is_loaded: boolean; // checked
    is_waybilled: boolean; // settled
    is_departed: boolean;
    is_arrived: boolean;
    departure_date: Date;
    arrival_date: Date;
    loaded_by: Staff; // checked_by" },
    waybilled_by: Staff; // settled_by" },
    pmt_reservation_ids: Array<any>; //Array<PmtReservation>;
    pmt_boarding_ids: Array<any>; //Array<PmtBoarding>;
    total_payout: number;
    fare_total: number;
    fuel_amount: number;
    driver_allowance: number;
    is_dto: boolean;
    dto_maintenance: number;
    dto_repayment: number;
    dto_service_charge: number;
    remark: string;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;
}

enum ScheduleStatus {
    ENROUTE = 'ENROUTE',
    QUEUING = 'QUEUING',
    BOARDING = 'BOARDING',
    LOADED = 'LOADED',
    WAYBILLED = 'WAYBILLED',
    DEPARTED = 'DEPARTED',
  }
