import { Injectable } from '@angular/core';
import { _throw}  from 'rxjs/observable/throw';
import { map } from 'rxjs/operators';
import { PmlRouting, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class PmlRoutings {

  pmlRoutings: PmlRouting[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const pmlRoutings = []; // Initial Values
    for (const pmlRouting of pmlRoutings) {
      this.pmlRoutings.push(new PmlRouting(pmlRouting));
    }
    // this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.pmlRoutings;
    }
    return this.pmlRoutings.filter((pmlRouting) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmlRouting[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmlRouting;
            } else if (field === params[key]) {
              return pmlRouting;
            }
          }
      }
      return null;
    });
  }

  add(record: PmlRouting) {
    this.pmlRoutings.push(record);
  }

  delete(record: PmlRouting) {
    this.pmlRoutings.splice(this.pmlRoutings.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-routings${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.pmlRoutings = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordCreate(record: PmlRouting): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-routings`;
      const proRes = this.apiService.postApi(url, record).pipe(
          map((res: ApiResponse) => {
              if (res.success && res.payload) {
                  console.log('recordCreate() successful');
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordUpdate(record: PmlRouting, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-routings/${record.id}`;
      const proRes = this.apiService.updateApi(url, payload).pipe(
          map((res: ApiResponse) => {
              if (res.success) {
                  this.delete(record);
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordDelete(record: PmlRouting, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-routings/${record.id}`;
      const proRes = this.apiService.deleteApi(url).pipe(
          map((res: ApiResponse) => {
              if (res.success) {
                  this.delete(record);
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }
}
