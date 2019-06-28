export class Weather {
    id?: number;
    name?: string;
    cod?: number;
    timezone?: number;
    coord ?: { lon?: number, lat?: number };
    weather?: [
        {
            id?: number,
            main?: string,
            description?: string,
            icon?: string;
        }
    ];
    base?: string;
    main?: {
        temp?: number,
        pressure?: number,
        humidity?: number,
        temp_min?: number,
        temp_max?: number,
        sea_level?: number,
        grnd_level?: number,
    };
    wind?: { speed?: number, deg?: number };
    rain?: { '3h'?: number };
    clouds?: { all?: number };
    dt?: number;
    sys?: {
        message?: number,
        country?: string,
        sunrise?: number,
        sunset?: number,
    };

    constructor(fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }

}

export interface Weather {
    id?: number;
    name?: string;
    cod?: number;
    timezone?: number;
    coord ?: { lon?: number, lat?: number };
    weather?: [
        {
            id?: number,
            main?: string,
            description?: string,
            icon?: string;
        }
    ];
    base?: string;
    main?: {
        temp?: number,
        pressure?: number,
        humidity?: number,
        temp_min?: number,
        temp_max?: number,
        sea_level?: number,
        grnd_level?: number,
    };
    wind?: { speed?: number, deg?: number };
    rain?: { '3h'?: number };
    clouds?: { all?: number };
    dt?: number;
    sys?: {
        message?: number,
        country?: string,
        sunrise?: number,
        sunset?: number,
    };
}
