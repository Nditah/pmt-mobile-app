import { Staff } from './staff';
import { Driver } from './driver';
import { Vehicle } from './vehicle';
import { Task } from './task';
import { Asset } from './asset';

export class Assignment {
    id: string;
    user_type: UserType;
    staff_id: Staff;
    driver_id: Driver;
    request_date: Date; // desired date to receive to have the request granted
    task_id: Task;
    asset_type: AssetType;
    vehicle_id: Vehicle;
    asset_id: Asset;
    issued_date: Date;
    issued_by: Staff;
    issuer_remark: string;
    request_status: RequestStatus;
    assignment_status: AssignmentStatus;
    is_returnable: boolean;
    expected_returned_date: Date;
    actual_returned_date: Date;
    collected_date: Date;
    collected_by: Staff; // Staff to received the returned asset
    collected_remark: string;
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

export interface Assignment {
    id: string;
    user_type: UserType;
    staff_id: Staff;
    driver_id: Driver;
    request_date: Date; // desired date to receive to have the request granted
    task_id: Task;
    asset_type: AssetType;
    vehicle_id: Vehicle;
    asset_id: Asset;
    issued_date: Date;
    issued_by: Staff;
    issuer_remark: string;
    request_status: RequestStatus;
    assignment_status: AssignmentStatus;
    is_returnable: boolean;
    expected_returned_date: Date;
    actual_returned_date: Date;
    collected_date: Date;
    collected_by: Staff; // Staff to received the returned asset
    collected_remark: string;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}


enum UserType { STAFF = 'STAFF', DRIVER = 'DRIVER', }

enum AssetType { VEHICLE = 'VEHICLE', INVENTORY = 'INVENTORY', }

enum AssignmentStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    ISSUED = 'ISSUED',
    COLLECTED = 'COLLECTED',
    REJECTED = 'REJECTED',
  }

  enum RequestStatus {
    PENDING = 'PENDING',
    COLLECTED = 'COLLECTED',
    REVOKED = 'REVOKED',
  }
