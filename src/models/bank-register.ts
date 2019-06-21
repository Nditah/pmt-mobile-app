import { Staff } from './staff';
import { Terminal } from './terminal';

export class BankRegister {
    id: string;
    transaction_code: string;
    transaction_date: Date;
    terminal_id: Terminal;
    subsidiary: string;
    depositor_id: Staff;
    amount_deposited: number;
    teller: string;
    acknowledged_date: Date;
    deposited_date: Date;
    authorized_date: Date;
    amount_realized: number;
    record_status: string;
    remark: string;
    created_by?: Staff;
    updated_by?: Staff;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface BankRegister {
   // [prop: string]: any;
   id: string;
   transaction_code: string;
   transaction_date: Date;
   terminal_id: Terminal;
   subsidiary: string;
   depositor_id: Staff;
   amount_deposited: number;
   teller: string;
   acknowledged_date: Date;
   deposited_date: Date;
   authorized_date: Date;
   amount_realized: number;
   record_status: string;
   remark: string;
   created_by?: Staff;
   updated_by?: Staff;
}

