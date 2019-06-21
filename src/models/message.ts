import { Customer } from "./customer";

export class Message {
    id: string;
    sender?: 'STAFF'|'CUSTOMER'|'DRIVER'|'PARTNER';
    recipient?: 'STAFF'|'CUSTOMER'|'DRIVER'|'PARTNER';
    staff_id?: any;
    driver_id?: any;
    customer_id?: Customer;
    partner_id?: any;
    subject?: string;
    body?: string;
    receive_status?: 'UNREAD'|'READ';
    sent_status?: 'DRAFT'|'SENT';
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
        this.recipient = 'CUSTOMER';
        this.receive_status = 'UNREAD';
    }

}

export interface Message {
    sender?: 'STAFF'|'CUSTOMER'|'DRIVER'|'PARTNER';
    recipient?: 'STAFF'|'CUSTOMER'|'DRIVER'|'PARTNER';
    staff_id?: any;
    driver_id?: any;
    customer_id?: Customer;
    partner_id?: any;
    subject?: string;
    body?: string;
    receive_status?: 'UNREAD'|'READ';
    sent_status?: 'DRAFT'|'SENT';
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;
}
