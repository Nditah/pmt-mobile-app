import { Vehicle } from './vehicle';
import { Rating } from './rating';
import { State } from './state';
import { Staff } from './staff';

export class Driver {
    id: string;
    serial?: string;
    driver_type: string;
    vehicle_id?: Vehicle;
    driver_licence: string;
    surname: string;
    other_name: string;
    gender?: string;
    birth_date: string;
    marital_status?: string;
    address: string;
    state_id?: State;
    country_iso2?: string;
    hub_id?: any;
    password?: string;
    otp?: string;
    otp_count?: number;
    otp_access: boolean;
    email?: string;
    phone: string;
    phone_personal?: string;
    kin?: string;
    kin_phone?: string;
    kin_address?: string;
    guarantor1?: string;
    guarantor1_address?: string;
    guarantor1_phone?: string;
    guarantor2?: string;
    guarantor2_address?: string;
    guarantor2_phone?: string;
    photo?: string;
    qualification?: string;
    institution?: string;
    notice?: string;
    rating_ids?: Array<Rating>;
    remark?: string;
    bonus?: string;
    bank_id?: any;
    bank_account_number?: string;
    bank_account_name?: string;
    is_document_complete?: boolean;
    is_assigned_vehicle?: boolean;
    approved_date?: string;
    employment_status?: string;
    disengaged_date?: string;
    created_by?: Staff;
    updated_by?: Staff;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Driver {
    id: string;
    serial?: string;
    driver_type: string;
    vehicle_id?: Vehicle;
    driver_licence: string;
    surname: string;
    other_name: string;
    gender?: string;
    birth_date: string;
    marital_status?: string;
    address: string;
    state_id?: State;
    country_iso2?: string;
    hub_id?: any;
    password?: string;
    otp?: string;
    otp_count?: number;
    otp_access: boolean;
    email?: string;
    phone: string;
    phone_personal?: string;
    kin?: string;
    kin_phone?: string;
    kin_address?: string;
    guarantor1?: string;
    guarantor1_address?: string;
    guarantor1_phone?: string;
    guarantor2?: string;
    guarantor2_address?: string;
    guarantor2_phone?: string;
    photo?: string;
    qualification?: string;
    institution?: string;
    notice?: string;
    rating_ids?: Array<Rating>;
    remark?: string;
    bonus?: string;
    bank_id?: any;
    bank_account_number?: string;
    bank_account_name?: string;
    is_document_complete?: boolean;
    is_assigned_vehicle?: boolean;
    approved_date?: string;
    employment_status?: string;
    disengage_by?: string;
    disengaged_date?: string;
    created_by?: Staff;
    updated_by?: Staff;
}

