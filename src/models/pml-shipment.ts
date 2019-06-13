import { Customer } from './customer';
import { PmlWaybill } from './pml-waybill';
import { Terminal } from './terminal';
import { Staff } from './staff';

export class PmlShipment {
  id: string;
  pml_waybill_id: PmlWaybill;
  code: string;
  name: string;
  shipment_name: string;
  customer_id: Customer;
  recipient_type: RecipientType;
  recipient_title:  string;
  recipient_name:  string;
  recipient_phone:  string;
  recipient_email: string;
  recipient_address:  string;
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
  billing_type: BillingType;
  cost_estimate: number;
  cost_payable: number;
  payment_method: PaymentMethod;
  payment_gateway: PaymentGateway;
  payment_status: PaymentStatus;
  delivery_date: Date;
  delivery_type: DeliveryType;
  delivery_staff: Staff;
  delivery_agent: Staff;
  delivery_status: DeliveryStatus;
  identification: string;
  remark: string;
  recipient_confirm: boolean;
  recipient_confirm_date: Date;
  recipient_confirm_remark: string;
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

export interface PmlShipment {
  id: string;
  pml_waybill_id: PmlWaybill;
  code: string;
  name: string;
  shipment_name: string;
  customer_id: Customer;
  recipient_type: RecipientType;
  recipient_title:  string;
  recipient_name:  string;
  recipient_phone:  string;
  recipient_email: string;
  recipient_address:  string;
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
  billing_type: BillingType;
  cost_estimate: number;
  cost_payable: number;
  payment_method: PaymentMethod;
  payment_gateway: PaymentGateway;
  payment_status: PaymentStatus;
  delivery_date: Date;
  delivery_type: DeliveryType;
  delivery_staff: Staff;
  delivery_agent: Staff;
  delivery_status: DeliveryStatus;
  identification: string;
  remark: string;
  recipient_confirm: boolean;
  recipient_confirm_date: Date;
  recipient_confirm_remark: string;
  created_by?: any;
  created_at?: Date;
  updated_by?: any;
  updated_at?: Date;
}

enum BillingType {
  PRE_PAID = 'PRE_PAID',
  POST_PAID = 'POST_PAID',
  DEDICATED = 'DEDICATED',
}

enum PaymentMethod {
  GATEWAY = 'GATEWAY',
  POS = 'POS',
  CASH = 'CASH',
  CHEQUE = 'CHEQUE',
  TRANSFER = 'TRANSFER',
  USSD = 'USSD',
}

enum PaymentGateway {
  FLUTTERWAVE = 'FLUTTERWAVE',
  INTERSWITCH = 'INTERSWITCH',
  UNIONBANK = 'UNIONBANK',
  PAYSTACK = 'PAYSTACK',
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
  GOOGLE_WALLET = 'GOOGLE_WALLET',
}

enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  FAIL = 'FAIL',
}

enum DeliveryType {
  HOME = 'HOME',
  TERMINAL = 'TERMINAL',
}

enum DeliveryStatus {
  PENDING = 'PENDING',
  STORE = 'STORE',
  TRANSIT = 'TRANSIT',
  DELIVER = 'DELIVER',
  DISCHARGE = 'DISCHARGE',
}

enum RecipientType {
  INDIVIDUAL = 'INDIVIDUAL',
  ORGANIZATION = 'ORGANIZATION',
}

enum RoutingStatus {
  STORE = 'STORE',
  TRANSIT = 'TRANSIT',
}
