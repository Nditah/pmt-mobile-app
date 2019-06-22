import { Terminal } from './terminal';
import { Staff } from './staff';
import { Driver } from './driver';
import { VoucherStage } from './voucher-stage';
import { AccountHeading } from './account-heading';

export class Voucher {
    id: string;
    transaction_code?: string;
    related_voucher_id?: Object;
    voucher_stage_id?: VoucherStage;
    account_heading_id?: AccountHeading;
    terminal_id?: Terminal;
    subsidiary?: string;
    amount?:     Number;
    description?: string;
    voucher_type: string;
    processing: string;
    beneficiary: string;
    staff_id: Staff;
    driver_id: Driver;
    acknowledge_by: Object;
    acknowledge_date: Date;
    endorsed_date: Date;
    endorsed_by: Staff;
    authorized_date: Date;
    authorized_by: Staff;
    approved_by: Staff;
    approved_date: Date;
    paid_by: Staff;
    paid_date: Date;
    pay_channel: string;	// "CASH|CHEQUE|BANKTRANSFER"
    received_by: string;
    received_date: Date;
    checked_by: Object;
    checked_date: Date;
    audited_by: Object;
    audited_date: Date;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Voucher {
    id: string;
    transaction_code?: string;
    related_voucher_id?: Object;
    voucher_stage_id?: VoucherStage;
    account_heading_id?: AccountHeading;
    terminal_id?: Terminal;
    subsidiary?: string;
    amount?: Number;
    description?: string;
    voucher_type: string;
    processing: string;
    beneficiary: string;
    staff_id: Staff;
    driver_id: Driver;
    acknowledge_by: Object;
    acknowledge_date: Date;
    endorsed_date: Date;
    endorsed_by: Staff;
    authorized_date: Date;
    authorized_by: Staff;
    approved_by: Staff;
    approved_date: Date;
    paid_by: Staff;
    paid_date: Date;
    pay_channel: string;	// "CASH|CHEQUE|BANKTRANSFER"
    received_by: string;
    received_date: Date;
    checked_by: Object;
    checked_date: Date;
    audited_by: Object;
    audited_date: Date;
}
