import { Vehicle } from './vehicle';
import { Office } from './office';
import { Terminal } from './terminal';
import { Rating } from './rating';

export class Staff {
    id: string;
    serial?: string;
    category?: string;
    title?: string;
    surname: string;
    other_name: string;
    gender: string;
    birth_date: Date;
    marital_status: string;
    children?: number;
    phone?: string;
    phone_personal?: string;
    address?: string;
    village?: string;
    state_id: string;
    county_id: string;
    country_iso2?: string;
    email?: string;
    password?: string;
    otp?: string;
    otp_count?: number;
    kin: string;
    kin_phone: string;
    kin_address: string;
    guarantor1: string;
    guarantor1_phone: string;
    guarantor1_address: string;
    guarantor2?: string;
    guarantor2_phone?: string;
    guarantor2_address?: string;
    profession?: string;
    qualification?: string;
    institution?: string;
    employment_status: string;
    tax?: number;
    basic_salary?: number;
    bonus?: number;
    entertainment_allowance?: number;
    house_allowance?: number;
    lunch_allowance?: number;
    medical_allowance?: number;
    transport_allowance?: number;
    utility_allowance?: number;
    welfare_allowance?: number;
    pension?: number;
    assurance?: number;
    bank_id?: string;
    bank_account_number?: string;
    bank_account_name?: string;
    rank?: string;
    office_id: Office;
    superior_id: Staff;
    subsidiary?: string;
    terminal_id: Terminal;
    vehicle_id?: Vehicle;
    notice?: string;
    rating_ids?: Array<Rating>;
    remark?: string;
    photo?: string;
    is_salary_payable?: boolean;
    is_document_complete?: boolean;
    access_level?: string;
    approved_by?: Staff;
    approved_date?: Date;
    disengaged_by?: Staff;
    disengaged_date?: Date;
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

export interface Staff {
    [prop: string]: any;

}
