import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { Setting, ApiResponse } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class Settings {

  settings: Setting[] = [];

  constructor(public storage: Storage,
        private env: EnvService,
        private apiService: ApiService) {
    const settings = []; // Initial Values
    for (const setting of settings) {
      this.settings.push(new Setting(setting));
    }
    this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.settings;
    }
    return this.settings.filter((setting) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = setting[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return setting;
            } else if (field === params[key]) {
              return setting;
            }
          }
      }
      return null;
    });
  }

  add(record: Setting) {
    this.settings.push(record);
  }

  delete(record: Setting) {
    this.settings.splice(this.settings.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/settings${queryString}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.settings = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordUpdate(record: Setting, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/settings/${record.id}`;
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

}
