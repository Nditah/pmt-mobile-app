import { Staff } from './staff';
import { Driver } from './driver';
import { Terminal } from './terminal';
import { Vehicle } from './vehicle';

export class Rating {
  id: string;
  star: string;
  subject: string;
  staff_id: Staff;
  driver_id: Driver;
  terminal_id: Terminal;
  vehicle_id: Vehicle;
  review: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
        this[f] = fields[f];
    }
}

}

export interface Rating {
[prop: string]: any;

  id: string;
  star: string;
  subject: string;
  staff_id: Staff;
  driver_id: Driver;
  terminal_id: Terminal;
  vehicle_id: Vehicle;
  review: string;
}

