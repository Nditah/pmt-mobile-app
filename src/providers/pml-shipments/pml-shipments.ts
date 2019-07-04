import { Injectable } from '@angular/core';
import { _throw}  from 'rxjs/observable/throw';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { PmlShipment, ApiResponse, Customer } from '../../models';
import { ApiService, EnvService, AuthService } from '../../services';
// import sample from './table';
import { hasProp } from '../../helpers';


@Injectable()
export class PmlShipments {

    pmlShipments: Array<PmlShipment> = [];
    user: Customer;

    constructor(public storage: Storage,
      private env: EnvService,
      private apiService: ApiService,
      private authService: AuthService) {
            const pmlShipments = []; //Initial Values
            for (const pmlShipment of pmlShipments) {
                this.pmlShipments.push(new PmlShipment(pmlShipment));
            }
            this.authService.isAuthenticated().then((user) => {
                if (user && hasProp(user, 'id')){
                  this.user = new Customer(user);
                  const queryString = `?filter={"$or":[{"sender_id":"${this.user.id}"},{"recipient_id":"${this.user.id}"}]}`;
                  this.recordRetrieve(queryString).then(data => {
              if(data.success){
                this.pmlShipments = data.payload.length > 0 ? data.payload : [];
                this.storage.set('pmlShipments', JSON.stringify(this.pmlShipments)).then(data => data);
              } else {
                this.storage.get('pmlShipments').then(data => {
                  this.pmlShipments = data ? JSON.parse(data) : [];
                });
              }
            }).catch(err => console.log(err));                
                }
            }).catch(err => console.log(err));
    }

  query(params?: any) {
    if (!params) {
      return this.pmlShipments;
    }
    return this.pmlShipments.filter((pmlShipment) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = pmlShipment[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return pmlShipment;
            } else if (field === params[key]) {
              return pmlShipment;
            }
          }
      }
      return null;
    });
  }

  add(record: PmlShipment) {
    this.pmlShipments.push(record);
  }

  delete(record: PmlShipment) {
    this.pmlShipments.splice(this.pmlShipments.indexOf(record), 1);
  }

  async recordRetrieve(queryString): Promise<ApiResponse> {
      const url = queryString || `?filter={"$or":[{"sender_id":"${this.user.id}"},{"recipient_id":"${this.user.id}"}]}`;
      const proRes = this.apiService.getApi(url).pipe(
          map((res: ApiResponse) => {
              console.log(res);
              if (res.success && res.payload.length > 0) {
                  this.pmlShipments = res.payload;
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordUpdate(record: PmlShipment, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/pml-shipments/${record.id}`;
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
