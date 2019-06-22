export class AccountHeading {
    id : string;
    code :	string; 	
    heading : string; 	
    account_class_id :	Number; 	
    description :	string; 	
    amount 	: Number; 	
    opening_balance : Number;	
    bank_account_id : Number;
    
    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface AccountHeading {
    id : string;
    code :	string; 	
    heading : string; 	
    account_class_id :	Number; 	
    description :	string; 	
    amount 	: Number; 	
    opening_balance : Number;	
    bank_account_id : Number;
}