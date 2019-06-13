import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { PmtReservation, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class PmtReservations {

  pmtReservations: PmtReservation[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const pmtReservations = []; // Initial Values
    for (const pmtReservation of pmtReservations) {
      this.pmtReservations.push(new PmtReservation(pmtReservation));
    }
    this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.pmtReservations;
    }
    return this.pmtReservations.filter((pmtReservation) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmtReservation[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmtReservation;
            } else if (field === params[key]) {
              return pmtReservation;
            }
          }
      }
      return null;
    });
  }

  add(record: PmtReservation) {
    this.pmtReservations.push(record);
  }

  delete(record: PmtReservation) {
    this.pmtReservations.splice(this.pmtReservations.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-reservations${queryString}`;
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

  async recordCreate(record: PmtReservation): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-reservations`;
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

  async recordUpdate(record: PmtReservation, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-reservations/${record.id}`;
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

  async recordDelete(record: PmtReservation, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-reservations/${record.id}`;
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
