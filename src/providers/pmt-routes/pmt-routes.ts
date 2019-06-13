import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { ApiResponse, PmtRoute } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class PmtRoutes {

  pmtRoutes: PmtRoute[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const pmtRoutes = []; // Initial Values
    for (const pmtRoute of pmtRoutes) {
      this.pmtRoutes.push(new PmtRoute(pmtRoute));
    }
    this.recordRetrieve().then();
  }

  query(params?: any) {
    if (!params) {
      return this.pmtRoutes;
    }
    return this.pmtRoutes.filter((pmtRoute) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmtRoute[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmtRoute;
            } else if (field === params[key]) {
              return pmtRoute;
            }
          }
      }
      return null;
    });
  }

  add(record: PmtRoute) {
    this.pmtRoutes.push(record);
  }

  delete(record: PmtRoute) {
    this.pmtRoutes.splice(this.pmtRoutes.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-routes${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  res.payload.forEach(element => {
                      this.add(element);
                  });
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordCreate(record: PmtRoute): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-routes`;
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

  async recordUpdate(record: PmtRoute, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-routes/${record.id}`;
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

  async recordDelete(record: PmtRoute, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-routes/${record.id}`;
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
