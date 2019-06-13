import { Staff } from './staff';

export class Message {
    id: string;
    sender?: string;
    recipient? : string;
    staff_id? : Object;
    driver_id? : Object;
    customer_id? : Object;
    partner_id? : Object;
    subject? : string;
    body? : string;
    receive_status? : string;
    sent_status? : string;
    // title: string;
    // phone: string;
    // email: string;
    // status: string;
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

export interface Message {
    id: string;
    sender?: string;
    recipient? : string;
    staff_id? : Object;
    driver_id? : Object;
    customer_id? : Object;
    partner_id? : Object;
    subject? : string;
    body? : string;
    receive_status? : string;
    sent_status? : string;
    created_by?: any;
    updated_by?: any;
}
