import { Spare } from './spare';
import { Staff } from './staff';
import { SpareLocation } from './spare-location';

export class SpareStock {
    id: string;
    spare_location_id: SpareLocation;
    spare_id: Spare;
    quantity: number;
    stock_in: number;
    stock_out: number;
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

export interface  SpareStock {
    id: string;
    spare_location_id: SpareLocation;
    spare_id: Spare;
    quantity: number;
    stock_in: number;
    stock_out: number;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}