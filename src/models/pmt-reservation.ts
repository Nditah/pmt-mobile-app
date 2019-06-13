import { Customer } from './customer';
import { PmtSchedule } from './pmt-schedule';
import { PmtRoute } from './pmt-route';

export class PmtReservation {
    id?: string;
    amount?: number;
    description?: string;
    transaction_code?: string;
    customer_id?: Customer['id'];
    pmt_schedule_id?: PmtSchedule['id'];
    pmt_route_id?: PmtRoute['id'];
    seat_quantity?: number;
    seat_positions?: Array<number>;
    payment_method?: 'GATEWAY' | 'USSD' | 'TRANSFER';
    payment_gateway?: 'PAYSTACK' | 'INTERSWITCH';
    payment_status?: 'PENDING' | 'SUCCESSFUL' | 'FAIL';
    reservation_status?: 'BOARDED'| 'BOOKED';
    gateway_transaction?: any;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;

    constructor(fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface PmtReservation {
    id?: string;
    amount?: number;
    description?: string;
    transaction_code?: string;
    customer_id?: Customer['id'];
    pmt_schedule_id?: PmtSchedule['id'];
    pmt_route_id?: PmtRoute['id'];
    seat_quantity?: number;
    seat_positions?: Array<number>;
    payment_method?: 'GATEWAY' | 'USSD' | 'TRANSFER';
    payment_gateway?: 'PAYSTACK' | 'INTERSWITCH';
    payment_status?: 'PENDING' | 'SUCCESSFUL' | 'FAIL';
    reservation_status?: 'BOARDED'| 'BOOKED';
    gateway_transaction?: any;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;
}


export enum PaymentMethod {
    GATEWAY = 'GATEWAY',
    POS = 'POS',
    CASH = 'CASH',
    CHEQUE = 'CHEQUE',
    TRANSFER = 'TRANSFER',
    USSD = 'USSD',
  }
  
  export enum PaymentGateway {
    FLUTTERWAVE = 'FLUTTERWAVE',
    INTERSWITCH = 'INTERSWITCH',
    UNIONBANK = 'UNIONBANK',
    PAYSTACK = 'PAYSTACK',
    STRIPE = 'STRIPE',
    PAYPAL = 'PAYPAL',
    GOOGLE_WALLET = 'GOOGLE_WALLET',
  }
  
  export enum PaymentStatus {
    PENDING = 'PENDING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAIL = 'FAIL',
  }
  
  export enum ReservationStatus {
    BOARDED = 'BOARDED', 
    BOOKED = 'BOOKED',
  }
