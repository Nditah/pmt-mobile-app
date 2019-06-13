export class FlutterwaveSubaccount {
    id: string;
    // subaccount_id: string;
    flwId?:	number;
    txRef?:	string;
    flwRef?:	string;
    orderRef?:	string;
    paymentPlan?:	string;
    createdAt?: string;
    amount?:	number;
    charged_amount?:	number;
    status?:	string;
    IP?:	string;
    currency?:	string;
    flw_id:	number;
    account_id:	number;
    subaccount_id:	string;
    account_bank:	string;
    account_number:	string;
    business_name:	string;
    fullname:	string;
    bank_name:	string;
    split_ratio:	number;
    split_type:	string;
    split_value:	number;
    meta?:	Array<any>;
    country:	string;
    
    
    
    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface FlutterwaveSubaccount {
    id: string;
    // subaccount_id: string;
    flwId?:	number;
    txRef?:	string;
    flwRef?:	string;
    orderRef?:	string;
    paymentPlan?:	string;
    createdAt?: string;
    amount?:	number;
    charged_amount?:	number;
    status?:	string;
    IP?:	string;
    currency?:	string;
    flw_id:	number;
    account_id:	number;
    subaccount_id:	string;
    account_bank:	string;
    account_number:	string;
    business_name:	string;
    fullname:	string;
    bank_name:	string;
    split_ratio:	number;
    split_type:	string;
    split_value:	number;
    meta?:	Array<any>;
    country:	string;
}

