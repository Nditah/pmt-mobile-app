import { Staff } from './staff';
import { Driver } from './driver';

export class Offence {
    id: string;
    offender_type: string;
    offender_id: Staff | Driver;
    offence?: string;
    offence_date?: Date;
    description?: string;
    offence_status?: string;
    verdict?: string;
    verdict_by?: Staff;
    verdict_date?: Date;
    verdict_remark?: string;
    fine: number;
    discipline?: string;
    suspension?: string;
    payment: string;
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

export interface Offence {
    id: string;
    offender_type: string;
    offender_id: Staff | Driver;
    offence?: string;
    offence_date?: Date;
    description?: string;
    offence_status?: string;
    verdict?: string;
    verdict_by?: Staff;
    verdict_date?: Date;
    verdict_remark?: string;
    fine: number;
    discipline?: string;
    suspension?: string;
    payment: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}

