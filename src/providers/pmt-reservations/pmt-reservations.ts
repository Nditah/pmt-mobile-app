import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { PmtReservation, ApiResponse, Customer } from '../../models';
import { ApiService, EnvService, AuthService } from '../../services';
import { hasProp } from '../../helpers';


@Injectable()
export class PmtReservations {

  pmtReservations: PmtReservation[] = [];
  user: Customer;

  constructor(private env: EnvService,
    private apiService: ApiService,
    private authService: AuthService,
    ) {
    const pmtReservations = []; // Initial Values
    for (const pmtReservation of pmtReservations) {
      this.pmtReservations.push(new PmtReservation(pmtReservation));
    }
    this.authService.isAuthenticated().then((pmtBooking) => {
        if (pmtBooking && hasProp(pmtBooking, 'customer')) {
          this.user = new Customer(pmtBooking.customer);
          if (hasProp(this.user, 'id')){
              const queryString = `?customer_id=${this.user.id}&sort=-created_at`;
              this.recordRetrieve(queryString).then().catch(err => console.log(err));                
          }
        }
      }).catch(err => console.log(err));
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
