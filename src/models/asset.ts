import { Staff } from './staff';
import { Terminal } from './terminal';

export class Asset {
    id: string;
    label: string;
    serial: string;
    name: string;
    type: string;
    make: string;
    measure: string;
    asset_category_id: any; // AssetCategory;
    description: string;
    terminal_id: Terminal;
    subsidiary: string;
    is_consumable: boolean;
    usability: Usability;
    worth: Worth;
    staff_id: Staff; // "custodian" },
    launch_date: Date;
    expire_date: Date;
    purchase_id: any; // Purchase
    opening_value: number;
    closing_value: number;
    salvage_value: number;
    current_value: number;
    photo: string;
    lifespan: number;
    total_depreciable_cost: number;
    depreciation_rate: number;
    depreciation_expense: number;
    accumulated_depreciation: number;
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

export interface Asset {
    id: string;
    label: string;
    serial: string;
    name: string;
    type: string;
    make: string;
    measure: string;
    asset_category_id: any; // AssetCategory;
    description: string;
    terminal_id: Terminal;
    subsidiary: string;
    is_consumable: boolean;
    usability: Usability;
    worth: Worth;
    staff_id: Staff; // "custodian" },
    launch_date: Date;
    expire_date: Date;
    purchase_id: any; // Purchase
    opening_value: number;
    closing_value: number;
    salvage_value: number;
    current_value: number;
    photo: string;
    lifespan: number;
    total_depreciable_cost: number;
    depreciation_rate: number;
    depreciation_expense: number;
    accumulated_depreciation: number;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}


enum Usability {
    DUTY = 'DUTY',
    SCRAP = 'SCRAP',
    SHOP = 'SHOP',
    SOLD = 'SOLD',
    DISPOSED = 'DISPOSED',
}

enum Worth { APPRECIATE = 'APPRECIATE', DEPRECIATE = 'DEPRECIATE' }
