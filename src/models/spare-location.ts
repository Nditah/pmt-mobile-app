
import { Terminal } from './terminal';
import { Staff } from './staff';

export class SpareLocation {
    id: string;
    name: string;	
    address: string;
    staff_list: Array<Staff>;
    headed_by: Staff;
    terminal_id: Terminal;
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

export interface  SpareLocation {
    id: string;
    name: string;	
    address: string;
    staff_list: Array<Staff>;
    headed_by: Staff;
    terminal_id: Terminal;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}