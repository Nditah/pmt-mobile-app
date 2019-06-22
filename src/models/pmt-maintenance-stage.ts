import { Staff } from "./staff";

export class PmtMaintenanceStage {
    id: string;
    level: number;
    name: string;
    coordinator: string;
    description: string;
    estimated_manhour: number;
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

export interface PmtMaintenanceStage {
    level: number;
    name: string;
    coordinator: string;
    description: string;
    estimated_manhour: number;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
