import { Vehicle } from './vehicle';
import { Driver } from './driver';
import { PmtMaintenanceFault } from './pmt-maintenance-fault';
import { PmtMaintenanceStage } from './pmt-maintenance-stage';
import { PmtMaintenanceGroup } from './pmt-maintenance-group';
import { Staff } from './staff';

export class PmtMaintenance {
    id: string;
    register_date: Date;
    vehicle_id: Vehicle;
    driver_id: Driver;
    complaint: string;
    pmt_maintenance_group_id: PmtMaintenanceGroup;
    diagnosis: string;
    pmt_maintenance_fault_id: PmtMaintenanceFault;
    spare_request_id: Array<any>;
    pmt_maintenance_stage_id: PmtMaintenanceStage;
    driver_remark: string;
    certified_by: string;
    certified_date:	Date;
    certified_remark:	string;
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

export interface PmtMaintenance {
    id: string;
    register_date: Date;
    vehicle_id: Vehicle;
    driver_id: Driver;
    complaint: string;
    pmt_maintenance_group_id: PmtMaintenanceGroup;
    diagnosis: string;
    pmt_maintenance_fault_id: PmtMaintenanceFault;
    spare_request_id: Array<any>;
    pmt_maintenance_stage_id: PmtMaintenanceStage;
    driver_remark: string;
    certified_by: string;
    certified_date:	Date;
    certified_remark:	string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
