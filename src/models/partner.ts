import {State} from './state';

export class Partner {
    id: string;
    title: string;
    surname: string;
    other_name: string;
    gender: string;
    address: string;
    state_id: State;
    country_iso2: string;
    password: string;
    otp: string;
    otp_count: number;
    email: string;
    phone: string;
    phone_personal: string;
    kin: string;
    kin_phone: string;
    kin_address: string;
    photo: string;
    notice: string;
    remark: string;
    // bank_id: Bank;
    bank_account_number: string;
    bank_account_name: string;


    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
}
