import { Staff } from './staff';
import { Driver } from './driver';

export class Vehicle {
    id: string;
    partner_id: any; // owner
    name: string;
    description: string;
    engine_number?: string;
    chasis_number?: string;
    plate_number?: string;
    registration_number?: string;
    seating_capacity?: number;
    vehicle_make: string;
    vehicle_class: string;
    vehicle_category: string;
    vehicle_custodian: string;
    current_staff_id?: Driver;
    current_driver_id?: Staff;
    subsidiary: string;
    vehicle_location: string;
    vehicle_assignment: string;
    asset_worthiness: string;
    color?: string;
    photo?: string;
    purchase_date?: string;
    launch_date?: string;
    expiry_date?: string;
    lifespan?: number;
    purchase_value?: number;
    opening_value?: number;
    closing_value?: number;
    salvage_value?: number;
    current_value?: number;
    total_depreciable_cost?: number;
    depreciation_rate?: number;
    depreciation_expense?: number;
    accumulated_depreciation?: number;
    record_status?: string;
    approved_by?: string;
    approved_date?: string;
    remark?: string;
    is_dto?: boolean;
    is_dto_settled?: boolean;
    dto_initial_deposit?: number;
    dto_maintenance_balance?: number;
    dto_repayment_total?: number;
    is_healthy?: boolean;
    is_active?: boolean;
    created_by?: any;
    updated_by?: any;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Vehicle {
    id: string;
    partner_id: any; // owner
    name: string;
    description: string;
    engine_number?: string;
    chasis_number?: string;
    plate_number?: string;
    registration_number?: string;
    seating_capacity?: number;
    vehicle_make: string;
    vehicle_class: string;
    vehicle_category: string;
    vehicle_custodian: string;
    current_staff_id?: Driver;
    current_driver_id?: Staff;
    subsidiary: string;
    vehicle_location: string;
    vehicle_assignment: string;
    asset_worthiness: string;
    color?: string;
    photo?: string;
    purchase_date?: string;
    launch_date?: string;
    expiry_date?: string;
    lifespan?: number;
    purchase_value?: number;
    opening_value?: number;
    closing_value?: number;
    salvage_value?: number;
    current_value?: number;
    total_depreciable_cost?: number;
    depreciation_rate?: number;
    depreciation_expense?: number;
    accumulated_depreciation?: number;
    record_status?: string;
    approved_by?: string;
    approved_date?: string;
    remark?: string;
    is_dto?: boolean;
    is_dto_settled?: boolean;
    dto_initial_deposit?: number;
    dto_maintenance_balance?: number;
    dto_repayment_total?: number;
    is_healthy?: boolean;
    is_active?: boolean;
    created_by?: any;
    updated_by?: any;
}
