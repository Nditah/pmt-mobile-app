import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { PmtReservation, ApiResponse, Customer } from '../../models';
import { ApiService, EnvService, AuthService } from '../../services';
import { hasProp } from '../../helpers';


@Injectable()
export class PmtReservations {

  pmtReservations: PmtReservation[] = [];
  user: Customer;

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService,
    private authService: AuthService) {
    const pmtReservations = []; // Initial Values
    for (const pmtReservation of pmtReservations) {
      this.pmtReservations.push(new PmtReservation(pmtReservation));
    }
    this.authService.isAuthenticated().then((pmtBooking) => {
        if (pmtBooking && hasProp(pmtBooking, 'customer')) {
          this.user = new Customer(pmtBooking.customer);
          if (hasProp(this.user, 'id')){
              const queryString = `?customer_id=${this.user.id}&sort=-created_at`;
              this.recordRetrieve(queryString).then(data => {
                if(data.success){
                  this.pmtReservations = data.payload.length > 0 ? data.payload : [];
                  this.storage.set('pmtReservations', JSON.stringify(this.pmtReservations)).then(data => data);
                } else {
                  this.storage.get('pmtReservations').then(data => {
                    this.pmtReservations = data ? JSON.parse(data) : [];
                  });
                }
              }).catch(err => console.log(err));                
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

  async recordRetrieve(queryStr = `?customer_id=${this.user.id}&sort=-created_at`): Promise<ApiResponse> {
    const url = `${this.env.API_URL}/pmt-reservations${queryStr}`;
    const proRes = this.apiService.getApi(url).pipe(
        map((res: ApiResponse) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
              this.pmtReservations = res.payload;
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
          map(async(res: ApiResponse) => {
              if (res.success && res.payload) {
                await this.recordRetrieve();
                  console.log('recordCreate()', res);
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
