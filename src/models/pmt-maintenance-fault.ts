import { Spare } from './spare';
import { Staff } from './staff';

export class PmtMaintenanceFault {
    id: string;
    name: string;
    estimated_manhour: number;
    spare_id: Spare;
    diagnosis: string;
    repair: string;
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

export interface PmtMaintenanceFault {
    id: string;
    name: string;
    estimated_manhour: number;
    spare_id: Spare;
    diagnosis: string;
    repair: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
