export class Customer {
    id?: string;
    customer_type?: string;
    title?: string;
    surname?: string;
    other_name?: string;
    gender?: string;
    birth_date?: Date;
    phone?: string;
    phone_personal?: string;
    email?: string;
    password?: string;
    otp?: string;
    otp_count?: number;
    contact_person?: string;
    contact_person_phone?: string;
    product?: string;
    photo?: string;
    address?: string;
    country_iso2?: string;
    is_pmt_client?: boolean;
    is_pesl_client?: boolean;
    is_pet_client?: boolean;
    is_shop_client?: boolean;
    is_tenant?: boolean;
    is_phone_verified?: boolean;
    is_email_verified?: boolean;

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
        this.is_pmt_client = true;
        this.photo = '/assets/img/avatar.jpeg';
        this.customer_type = 'INDIVIDUAL';
        this.country_iso2 = 'NG';
    }

}

export interface Customer {
    id?: string;
    customer_type?: string;
    title?: string;
    surname?: string;
    other_name?: string;
    gender?: string;
    birth_date?: Date;
    phone?: string;
    phone_personal?: string;
    email?: string;
    password?: string;
    otp?: string;
    otp_count?: number;
    contact_person?: string;
    contact_person_phone?: string;
    product?: string;
    photo?: string;
    address?: string;
    country_iso2?: string;
    is_pmt_client?: boolean;
    is_pesl_client?: boolean;
    is_pet_client?: boolean;
    is_shop_client?: boolean;
    is_tenant?: boolean;
    is_phone_verified?: boolean;
    is_email_verified?: boolean;
}
