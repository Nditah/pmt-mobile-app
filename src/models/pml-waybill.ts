import { Terminal } from './terminal';
import { Staff } from './staff';
import { PmlShipment } from './pml-shipment';

export class PmlWaybill {
    id: string;
    code: string;
    name: string;
    terminal_from: Terminal;
    terminal_to: Terminal;
    terminal_store: Terminal;
    pml_shipment_ids: Array<PmlShipment>;
    transport_charge: number;
    delivery_status: DeliveryStatus;
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

export interface PmlWaybill {
    id: string;
    code: string;
    name: string;
    terminal_from: Terminal;
    terminal_to: Terminal;
    terminal_store: Terminal;
    pml_shipment_ids: Array<PmlShipment>;
    transport_charge: number;
    delivery_status: DeliveryStatus;
    created_by?: any;
    created_at?: Date;
    updated_by?: any;
    updated_at?: Date;
}

enum DeliveryStatus {
    PENDING = 'PENDING',
    STORED = 'STORED',
    TRANSIT = 'TRANSIT',
    DELIVERED = 'DELIVERED',
    DISCHARGED = 'DISCHARGED',
  }