import { PmtRoute } from './pmt-route';
import { Vehicle } from './vehicle';
import { Staff } from './staff';
import { PmtBoarding } from './pmt-boarding';
import { PmtReservation } from './pmt-reservation';
import { Driver } from './driver';
import { Terminal } from './terminal';

export class PmtSchedule {
    id?: string;
    driver_id?: Driver;
    terminal_id?: Terminal;
    vehicle_id?: Vehicle;
    pmt_route_id?: PmtRoute;
    boarding_date?: Date;
    schedule_status?: 'ENROUTE'|'QUEUING'|'BOARDING'|'LOADED'|'WAYBILLED'|'DEPARTED';
    is_reservable?: boolean;
    is_full?: boolean;
    is_loaded?: boolean; // checked
    is_waybilled?: boolean; // settled
    is_departed?: boolean;
    is_arrived?: boolean;
    departure_date?: Date;
    arrival_date?: Date;
    loaded_by?: Staff; // checked_by" },
    waybilled_by?: Staff; // settled_by" },
    pmt_reservation_ids?: Array<PmtReservation>;
    pmt_boarding_ids?: Array<PmtBoarding>;
    fare?: number;
    fare_total?: number;
    fuel_amount?: number;
    driver_allowance?: number;
    is_dto?: boolean;
    dto_maintenance?: number;
    dto_repayment?: number;
    dto_service_charge?: number;
    payout_total?: number;
    balance?: number;
    arrived_by?: Staff;
    departed_by?: Staff;
    loaded_date?: Date;
    waybilled_date?: Date;
    arrived_date?: Date;
    departed_date?: Date;
    remark?: string;
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
        this.schedule_status = 'QUEUING';
        this.balance = this.fare_total - this.payout_total;
    }

}

export interface PmtSchedule {
    id?: string;
    driver_id?: Driver;
    terminal_id?: Terminal;
    vehicle_id?: Vehicle;
    pmt_route_id?: PmtRoute;
    boarding_date?: Date;
    schedule_status?: 'ENROUTE'|'QUEUING'|'BOARDING'|'LOADED'|'WAYBILLED'|'DEPARTED';
    is_reservable?: boolean;
    is_full?: boolean;
    is_loaded?: boolean; // checked
    is_waybilled?: boolean; // settled
    is_departed?: boolean;
    is_arrived?: boolean;
    departure_date?: Date;
    arrival_date?: Date;
    loaded_by?: Staff; // checked_by" },
    waybilled_by?: Staff; // settled_by" },
    pmt_reservation_ids?: Array<PmtReservation>;
    pmt_boarding_ids?: Array<PmtBoarding>;
    fare?: number;
    fare_total?: number;
    fuel_amount?: number;
    driver_allowance?: number;
    is_dto?: boolean;
    dto_maintenance?: number;
    dto_repayment?: number;
    dto_service_charge?: number;
    payout_total?: number;
    balance?: number;
    arrived_by?: Staff;
    departed_by?: Staff;
    loaded_date?: Date;
    waybilled_date?: Date;
    arrived_date?: Date;
    departed_date?: Date;
    remark?: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
