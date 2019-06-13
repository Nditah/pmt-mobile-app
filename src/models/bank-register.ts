import { Staff } from './staff';

export class BankRegister {
    id: string;
    transaction_code: string;
    transaction_date: Date;
    terminal_id: string;
    subsidiary: string;
    depositor_id: string;
    amount_deposited: number;
    teller: string;
    acknowledged_date: Date;
    deposited_date: Date;
    authorized_date: Date;
    amount_realized: number;
    record_status: string;
    remark: string;
    created_by?: any;
    updated_by?: any;

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
   terminal_id: string;
   subsidiary: string;
   depositor_id: string;
   amount_deposited: number;
   teller: string;
   acknowledged_date: Date;
   deposited_date: Date;
   authorized_date: Date;
   amount_realized: number;
   record_status: string;
   remark: string;
   created_by?: any;
   updated_by?: any;
}

