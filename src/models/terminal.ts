import { City } from './city';
import { County } from './county';
import { State } from './state';
import { Staff } from './staff';

export class Terminal {
    id: string;
    name: string;
    manager?: string;
    phone?: string;
    quarter?: string;
    city_id?: City;
    county_id?: County;
    state_id?: State;
    country_iso2?: string;
    hub_id?: any  
    address?: string;
    longitude?: number;
    latitude?: number;
    capacity?: number;
    is_pml_operational?: boolean;
    is_pmt_operational?: boolean;
    is_pmt_online?: boolean;
    photo?: string;
    created_by?: Staff;
    updated_by?: Staff;

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
        this.photo = '/assets/img/bus-logo.jpg';
        this.phone = '07007322362';
    }

}

export interface Terminal {
    id: string;
    name: string;
    manager?: string;
    phone?: string;
    quarter?: string;
    city_id?: City;
    county_id?: County;
    state_id?: State;
    country_iso2?: string;
    hub_id?: any  
    address?: string;
    longitude?: number;
    latitude?: number;
    capacity?: number;
    is_pml_operational?: boolean;
    is_pmt_operational?: boolean;
    is_pmt_online?: boolean;
    photo?: string;
    created_by?: Staff;
    updated_by?: Staff;
}
