import { Terminal } from './terminal';
import { PmlShipment } from './pml-shipment';
import { Staff } from './staff';
import { Driver } from './driver';
import { Vehicle } from './vehicle';
import { PmlWaybill } from './pml-waybill';

export class PmlRouting {
  id: string;
  kind: Kind;
  pml_shipment_id: PmlShipment;
  pml_waybill_id: PmlWaybill;
  terminal_id: Terminal;
  terminal_to: Terminal;
  terminal_from: Terminal;
  driver_from: Driver;
  driver_to: Driver;
  staff_forwarding: Staff;
  staff_receiving: Staff;
  forwarding_date: Date;
  receiving_date: Date;
  forwarding_charge: number;
  remark: string;
  routing_action: RoutingAction;
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

export interface PmlRouting {
  id: string;
  kind: Kind;
  pml_shipment_id: PmlShipment;
  pml_waybill_id: PmlWaybill;
  terminal_id: Terminal;
  terminal_to: Terminal;
  terminal_from: Terminal;
  driver_from: Driver;
  driver_to: Driver;
  staff_forwarding: Staff;
  staff_receiving: Staff;
  forwarding_date: Date;
  receiving_date: Date;
  forwarding_charge: number;
  remark: string;
  routing_action: RoutingAction;
  created_by?: any;
  created_at?: Date;
  updated_by?: any;
  updated_at?: Date;
}

enum RoutingAction {
  RECEIVING = 'RECEIVING',
  FORWARDING = 'FORWARDING',
}

enum Kind {
  SHIPMENT = 'SHIPMENT',
  WAYBILL = 'WAYBILL',
}
