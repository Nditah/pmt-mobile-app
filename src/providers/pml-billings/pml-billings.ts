import { Injectable } from '@angular/core';
import { _throw}  from 'rxjs/observable/throw';
import { map } from 'rxjs/operators';
import { PmlBilling, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class PmlBillings {

  pmlBillings: PmlBilling[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const pmlBillings = []; // Initial Values
    for (const pmlBilling of pmlBillings) {
      this.pmlBillings.push(new PmlBilling(pmlBilling));
    }
    this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.pmlBillings;
    }
    return this.pmlBillings.filter((pmlBilling) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmlBilling[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmlBilling;
            } else if (field === params[key]) {
              return pmlBilling;
            }
          }
      }
      return null;
    });
  }


  add(record: PmlBilling) {
    this.pmlBillings.push(record);
  }

  delete(record: PmlBilling) {
      this.pmlBillings.splice(this.pmlBillings.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-billings${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.pmlBillings = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordCreate(record: PmlBilling): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-billings`;
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

  async recordUpdate(record: PmlBilling, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-billings/${record.id}`;
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

  async recordDelete(record: PmlBilling, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-billings/${record.id}`;
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
