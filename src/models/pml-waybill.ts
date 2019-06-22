import { Staff } from './staff';
import { PmlShipment } from './pml-shipment';
import { PmlRouting } from './pml-routing';

export class PmlWaybill {
    id: string;
    code: string;
    name: string;
    pml_routing_ids: Array<PmlRouting>;
    pml_shipment_ids: Array<PmlShipment>;
    transport_charge: number;
    delivery_status: DeliveryStatus;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
    }

}

export interface PmlWaybill {
    id: string;
    code: string;
    name: string;
    pml_routing_ids: Array<PmlRouting>;
    pml_shipment_ids: Array<PmlShipment>;
    transport_charge: number;
    delivery_status: DeliveryStatus;
    created_by?: Staff;
    created_at?: Date;
    updated_by?: Staff;
    updated_at?: Date;
}

enum DeliveryStatus {
    PENDING = 'PENDING',
    STORED = 'STORED',
    TRANSIT = 'TRANSIT',
    DELIVERED = 'DELIVERED',
    DISCHARGED = 'DISCHARGED',
  }