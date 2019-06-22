
export class VoucherStage {
    id: string;
    stage?: string;
    name?:  string;
    officer?: string;
    description?: string;

    cconstructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface VoucherStage {
    id: string;
    stage?: string;
    name?:  string;
    officer?: string;
    description?: string;
}


