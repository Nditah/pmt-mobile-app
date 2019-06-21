import { Staff } from './staff';

export class PmlBilling {
  id: string;
  name: string;
  value: number;
  description: string;
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

export interface PmlBilling {
// [prop: string]: any;
  id: string;
  name: string;
  value: number;
  description: string;
  created_by?: Staff;
  created_at?: Date;
  updated_by?: Staff;
  updated_at?: Date;
}

