import { Staff } from "./staff";
import { Terminal } from "./terminal";

export class City {
    id?: string;
    name?: string;
    state_id?: string;
    abbreviation?: string;
    country_iso2 ?: string;
    terminal_ids?: Array<Terminal>;
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

export interface City {
 //   [prop?: string]?: any;
 id?: string;
    name?: string;
    state_id?: string;
    abbreviation?: string;
    country_iso2 ?: string;
    terminal_ids?: Array<Terminal>;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}
