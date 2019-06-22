export class Task {
    id: string;
    name: string;
    status: string;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Task {
    [prop: string]: any;
    id: string;
    name: string;
    status: string;
}
