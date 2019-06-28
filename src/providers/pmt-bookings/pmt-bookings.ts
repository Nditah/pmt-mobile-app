import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { PmtReservation, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class PmtBookings {

  pmtBookings: PmtReservation[] = [];

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService) {
    const pmtBookings = []; // Initial Values
    for (const pmtBooking of pmtBookings) {
      this.pmtBookings.push(new PmtReservation(pmtBooking));
    }
    // this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.pmtBookings;
    }
    return this.pmtBookings.filter((pmtBooking) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmtBooking[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmtBooking;
            } else if (field === params[key]) {
              return pmtBooking;
            }
          }
      }
      return null;
    });
  }

  add(record: PmtReservation) {
    this.pmtBookings.push(record);
  }

  delete(record: PmtReservation) {
    this.pmtBookings.splice(this.pmtBookings.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-bookings${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.pmtBookings = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordCreate(record: PmtReservation): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pmt-bookings`;
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
      const url = `${this.env.API_URL}/pmt-bookings/${record.id}`;
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
      const url = `${this.env.API_URL}/pmt-bookings/${record.id}`;
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
