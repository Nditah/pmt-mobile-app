import { Customer } from './customer';
import { PmlWaybill } from './pml-waybill';
import { Terminal } from './terminal';
import { Staff } from './staff';
import { PmtSchedule } from './pmt-schedule';
import { PmlRouting } from './pml-routing';

export class PmlShipment {
  id: string;
  code: string;
  name: string;
  pml_routing_ids: Array<PmlRouting>;
  pml_waybill_id: PmlWaybill;
  pmt_schedule_id: PmtSchedule;
  sender_id: Customer;
  recipient_id: Customer;
  urgency: number;
  distance: number;
  mass: number;
  volume: number;
  worth: number;
  is_fragile: boolean;
  is_perishable: boolean;
  is_combustible: boolean;
  is_odiferous: boolean;
  is_solid: boolean;
  is_unique: boolean;
  description: string;
  terminal_from: Terminal;
  terminal_to: Terminal;
  terminal_store: Terminal;
  travel_hour: number;
  departure_date: Date;
  expected_date: Date;
  billing_type: 'PRE_PAID'|'POST_PAID'|'DEDICATED';
  cost_estimate: number;
  cost_payable: number;
  payment_method: 'GATEWAY'|'POS'|'CASH'|'CHEQUE'|'TRANSFER'|'USSD';
  payment_gateway: 'UNIONBANK'|'PAYSTACK';
  payment_status: 'PENDING'|'SUCCESSFUL'|'FAIL';
  delivery_date: Date;
  delivery_type: 'HOME'|'TERMINAL';
  delivery_staff: Staff;
  delivery_agent: Staff;
  delivery_status: 'PENDING'|'STORED'|'TRANSIT'|'DELIVERED'|'DISCHARGED';
  identification: string;
  remark: string;
  recipient_confirm: boolean;
  recipient_confirm_date: Date;
  recipient_confirm_remark: string;
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

export interface PmlShipment {
  id: string;
  code: string;
  name: string;
  pml_routing_ids: Array<PmlRouting>;
  pml_waybill_id: PmlWaybill;
  pmt_schedule_id: PmtSchedule;
  sender_id: Customer;
  recipient_id: Customer;
  urgency: number;
  distance: number;
  mass: number;
  volume: number;
  worth: number;
  is_fragile: boolean;
  is_perishable: boolean;
  is_combustible: boolean;
  is_odiferous: boolean;
  is_solid: boolean;
  is_unique: boolean;
  description: string;
  terminal_from: Terminal;
  terminal_to: Terminal;
  terminal_store: Terminal;
  travel_hour: number;
  departure_date: Date;
  expected_date: Date;
  billing_type: 'PRE_PAID'|'POST_PAID'|'DEDICATED';
  cost_estimate: number;
  cost_payable: number;
  payment_method: 'GATEWAY'|'POS'|'CASH'|'CHEQUE'|'TRANSFER'|'USSD';
  payment_gateway: 'UNIONBANK'|'PAYSTACK';
  payment_status: 'PENDING'|'SUCCESSFUL'|'FAIL';
  delivery_date: Date;
  delivery_type: 'HOME'|'TERMINAL';
  delivery_staff: Staff;
  delivery_agent: Staff;
  delivery_status: 'PENDING'|'STORED'|'TRANSIT'|'DELIVERED'|'DISCHARGED';
  identification: string;
  remark: string;
  recipient_confirm: boolean;
  recipient_confirm_date: Date;
  recipient_confirm_remark: string;
  created_by?: Staff;
  created_at?: Date;
  updated_by?: Staff;
  updated_at?: Date;
}
