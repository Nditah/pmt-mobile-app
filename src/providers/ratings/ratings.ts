import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { Rating, ApiResponse, Customer } from '../../models';
import { ApiService, EnvService, AuthService } from '../../services';
import { hasProp } from '../../helpers';


@Injectable()
export class Ratings {

  ratings: Rating[] = [];
  user: Customer;

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService,
    private authService: AuthService) {
    const ratings = []; // Initial Values
    for (const rating of ratings) {
      this.ratings.push(new Rating(rating));
    }
    this.authService.isAuthenticated().then((pmtBooking) => {
      if (pmtBooking && hasProp(pmtBooking, 'customer')) {
        this.user = new Customer(pmtBooking.customer);
        if (hasProp(this.user, 'id')){
          const queryString = `?customer_id=${this.user.id}&sort=-created_at`;
          this.recordRetrieve(queryString).then(data => {
            if(data.success){
              this.ratings = data.payload.length > 0 ? data.payload : [];
              this.storage.set('pmtReservations', JSON.stringify(this.ratings)).then(data => data);
            } else {
              this.storage.get('pmtReservations').then(data => {
                this.ratings = data ? JSON.parse(data) : [];
              });
            }
          }).catch(err => console.log(err));                
        }
      }
    }).catch(err => console.log(err));
  }

  query(params?: any) {
    if (!params) {
      return this.ratings;
    }
    return this.ratings.filter((rating) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = rating[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return rating;
            } else if (field === params[key]) {
              return rating;
            }
          }
      }
      return null;
    });
  }

  add(record: Rating) {
    this.ratings.push(record);
  }

  delete(record: Rating) {
    this.ratings.splice(this.ratings.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/ratings${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.ratings = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordCreate(record: Rating): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/ratings`;
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

  async recordUpdate(record: Rating, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/ratings/${record.id}`;
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

  async recordDelete(record: Rating, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/ratings/${record.id}`;
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
