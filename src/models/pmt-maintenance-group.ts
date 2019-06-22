import { Staff } from "./staff";

export class PmtMaintenanceGroup {
    id: string;
    name: string;
    staff_size: number;
    leader: string;
    members: Array<any>;
    specialty: string;
    description: string;
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

export interface PmtMaintenanceGroup {
    name: string;
    staff_size: number;
    leader: string;
    members: Array<any>;
    specialty: string;
    description: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
