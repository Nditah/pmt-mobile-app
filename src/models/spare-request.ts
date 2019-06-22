
import { Spare } from './spare';
import { Staff } from './staff';
import { SpareLocation } from './spare-location';
import { Vehicle } from './vehicle';
import { Driver } from './driver';
import { PmtMaintenance } from './pmt-maintenance';

export class SpareRequest {
    id?: string;
    code?: string;
    pmt_maintenance_id?: PmtMaintenance;
    spare_id?: Spare;
    quantity?: number;
    request_date?: Date;
    recipient?:	'DRIVER' | 'STAFF';
    recipient_staff_id?: Staff;
    recipient_driver_id?: Driver;
    vehicle_id?: Vehicle;
    description?:Spare;
    approved_date?: Date;
    approved_by?: Staff	;
    issued_date?: Date;
    issued_by?:	Staff;
    issuer_remark?: string;
    location_id?: SpareLocation;
    request_status?: string;
    issue_status?: string;
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

export interface  SpareRequest {
    id?: string;
    code?: string;
    pmt_maintenance_id?: PmtMaintenance;
    spare_id?: Spare;
    quantity?: number;
    request_date?: Date;
    recipient?:	'DRIVER' | 'STAFF';
    recipient_staff_id?: Staff;
    recipient_driver_id?: Driver;
    vehicle_id?: Vehicle;
    description?:Spare;
    approved_date?: Date;
    approved_by?: Staff	;
    issued_date?: Date;
    issued_by?:	Staff;
    issuer_remark?: string;
    location_id?: SpareLocation;
    request_status?: string;
    issue_status?: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
