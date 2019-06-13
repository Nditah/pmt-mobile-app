import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Rating, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class Ratings {

  ratings: Rating[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const ratings = []; // Initial Values
    for (const rating of ratings) {
      this.ratings.push(new Rating(rating));
    }
    // this.recordRetrieve();
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
