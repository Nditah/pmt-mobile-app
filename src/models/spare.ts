import { Staff } from './staff';

export class Spare {
    id: string;
    code: string;
    name: string;
    measure: string;
    model: string;
    make: string;
    category: string;
    description: string;
    parent_spare_id: Spare;
    split_gain: number;
    splittable:	boolean;
    depletion: number;
    reorder_level: number;
    reorder_quantity: number;
    unit_price: number;
    supplier_id: any;
    is_usability: boolean;
    photo:	string;
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

export interface Spare {
    id: string;
    code: string;
    name: string;
    measure: string;
    model: string;
    make: string;
    category: string;
    description: string;
    parent_spare_id: Spare;
    split_gain: number;
    splittable:	boolean;
    depletion: number;
    reorder_level: number;
    reorder_quantity: number;
    unit_price: number;
    supplier_id: any;
    is_usability: boolean;
    photo:	string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
