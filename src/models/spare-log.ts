
import { Spare } from './spare';
import { Staff } from './staff';
import { SpareLocation } from './spare-location';
import { SpareTransfer } from './spare-transfer';
import { Driver } from './driver';
import { Customer } from './customer';

export class SpareLog {
    id?: string;
    spare_id?: Spare;
    location_id?: SpareLocation;
    quantity?: number;
    transaction_code?: string;
    description?: string;
    order_type?: 'SPARE_REQUEST_ASSIGNMENT'|'SPARE_SALES'|'SPARE_PURCHASE'|'SPARE_TRANSFER';
    spare_request_assignment_id?: any; //SpareRequestAssignment,
    spare_sales_id?: any; //Sales;
    spare_purchase_id?: any; //Purchase;
    spare_transfer_id?: SpareTransfer;
    recipient?: 'STAFF'|'DRIVER'|'CUSTOMER'|'SUPPLIER';
    staff_recipient_id?: Staff;
    driver_recipient_id?: Driver;
    customer_recipient_id?: Customer;
    supplier_recipient_id?: any; //Supplier;
    spare_staff?: Staff;
    spare_staff_remark?: string;
    transaction_date?: Date;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
    
    constructor(fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
}

export interface  SpareLog {
    id?: string;
    spare_id?: Spare;
    location_id?: SpareLocation;
    quantity?: number;
    transaction_code?: string;
    description?: string;
    order_type?: 'SPARE_REQUEST_ASSIGNMENT'|'SPARE_SALES'|'SPARE_PURCHASE'|'SPARE_TRANSFER';
    spare_request_assignment_id?: any; //SpareRequestAssignment,
    spare_sales_id?: any; //Sales;
    spare_purchase_id?: any; //Purchase;
    spare_transfer_id?: SpareTransfer;
    recipient?: 'STAFF'|'DRIVER'|'CUSTOMER'|'SUPPLIER';
    staff_recipient_id?: Staff;
    driver_recipient_id?: Driver;
    customer_recipient_id?: Customer;
    supplier_recipient_id?: any; //Supplier;
    spare_staff?: Staff;
    spare_staff_remark?: string;
    transaction_date?: Date;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
    
}