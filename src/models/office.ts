import { Staff } from './staff';

export class Office {
    id: string;
    name: string;
    code: string;
    hierarchy : number;
    office_type : string;
    office_above :number;
    headed_by : string;
    headed_by2 : string;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Office {
    id: string;
    name: string;
    code: string;
    hierarchy : number;
    office_type : string;
    office_above :number;
    headed_by : string;
    headed_by2 : string;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;
}

