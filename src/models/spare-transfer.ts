
import { Spare } from './spare';
import { Staff } from './staff';
import { SpareLocation } from './spare-location';


export class SpareTransfer {
    id: string;
    name: string;	
    code: string;
    spare_id: Spare;
    quantity: number;
    location_from: SpareLocation;
    location_to: SpareLocation;
    description: string;
    fulfilled_date: Date;
    fulfilled_by: Staff;
    confirmed_by: Staff;
    confirmed_date: Date;	
    transfer_status: string;
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
    }
}

export interface  SpareTransfer {
    id: string;
    name: string;	
    code: string;
    spare_id: Spare;
    quantity: number;
    location_from: SpareLocation;
    location_to: SpareLocation;
    description: string;
    fulfilled_date: Date;
    fulfilled_by: Staff;
    confirmed_by: Staff;
    confirmed_date: Date;	
    transfer_status: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}