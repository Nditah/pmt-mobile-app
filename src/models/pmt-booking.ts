import { Customer } from './customer';
import { PmtSchedule } from './pmt-schedule';
import { PmtRoute } from './pmt-route';
import { Vehicle } from './vehicle';
import { Terminal } from './terminal';

export class PmtBooking {
    customer?: Customer;
    token?: string;
    bookingStage?: string;
    boardingDate?: string;
    pmtSchedule?: PmtSchedule;
    pmtRoute?: PmtRoute;
    vehicle?: Vehicle;
    terminalFrom?: Terminal;
    terminalTo?: Terminal;
    seatQuantity?: number;
    seatPositions?: Array<number>;
    amount?: number;

    constructor(fields: any) {
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
        this.boardingDate = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().split(',')[0];
        this.bookingStage ='page-home';
    }

}

export interface PmtBooking {
    // [prop: string]: any;
    customer?: Customer;
    token?: string;
    bookingStage?: string;
    boardingDate?: string;
    pmtSchedule?: PmtSchedule;
    pmtRoute?: PmtRoute;
    vehicle?: Vehicle;
    terminalFrom?: Terminal;
    terminalTo?: Terminal;
    seatQuantity?: number;
    seatPositions?: Array<number>;
    amount?: number;
}

