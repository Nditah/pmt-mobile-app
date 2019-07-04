import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';

@Injectable()
export class Weathers {
  

  records: Array<any> = [];

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService) {
  }

  query(params?: any) {
    if (!params) {
      return this.records;
    }
    return this.records.filter((record) => {
      // tslint:disable-next-line:forin
      for (const key in params) {
        const field = record[key];
        if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return record;
        } else if (field === params[key]) {
          return record;
        }
      }
      return null;
    });
  }

  add(record) {
    this.records.push(record);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
    const url = `${this.env.API_URL}/cities/weather${queryString}`;
    console.log('GET url ==>', url);
    const proRes = this.apiService.getApi(url).pipe(
        map((res: ApiResponse) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
                this.records = res.payload;
            } else {
                _throw(res.message);
            }
            return res;
        }));
    return await proRes.toPromise();
  }

}
