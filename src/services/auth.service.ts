import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { App, ToastController } from "ionic-angular";
import { tap } from 'rxjs/operators';
import { LoginResponse, PmtBooking, ApiResponse } from '../models';
import { EnvService } from './env.service';
import { BookingService } from './booking.service';
import { hasProp } from '../helpers';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  depth = 0;

  constructor(public app: App,
    public storage: Storage,
    public http: HttpClient,
    public toastCtrl: ToastController,
    public bookingService: BookingService,
    public env: EnvService) {
    }

  cleanObject(obj) {
    this.depth += 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const propName in obj) {
        if (!obj[ propName ] || obj[ propName ].length === 0) {
            delete obj[ propName ];
        } else if (typeof obj === 'object') {
            if (this.depth <= 3) {
              this.cleanObject(obj[ propName ]);
            }
        }
    }
    return obj;
  }

  async postLogin(data): Promise<LoginResponse> {
    const payload = this.cleanObject(data);
    const response = this.http.post(this.env.API_URL + '/customers/login', payload)
    .pipe(tap((res: LoginResponse) => {
        console.log('auth.service: res =>', res);
      if (res.success) {
        this.createToast(`Login successful`);
        const { user, token } = res.payload;
        this.storage.set('token', token).then(val => val);
        this.bookingService.setBookingData({ customer: user, token }).then(val => val);
        this.isLoggedIn = true;
      } else {
        this.createToast(res.message);
        this.isLoggedIn = false;
      }
      }));
      return await response.toPromise();
  }

  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    });
  }

  createCustomer(data: any) {
    const payload = this.cleanObject(data);
    return this.http.post(this.env.API_URL + '/customers', payload);
  }

  async updateCustomer(data, id): Promise<LoginResponse> {
    const payload = this.cleanObject(data);
    const response = this.http.put(`${this.env.API_URL}/customers/${id}`, payload)
    .pipe(tap((res: ApiResponse) => {
        console.log('auth.service: res =>', res);
      if (res.success && res.payload) {
        console.log(`Update successful`, res.payload);
        // this.bookingService.setBookingData({ customer: res.payload }).then(val => val);
      } else {
        console.log(res.message);
      }
      }));
      return await response.toPromise();
  }
  
  userLogout() {
    this.isLoggedIn = false;
    this.bookingService.setBookingData({ customer: null }).then((val) => {
    }).catch((err) => {
      console.log('Error retrieving user from storage', err)
    });
    // this.navCtrl.popToRoot;
    // this.navCtrl.setRoot('page-auth');
  }

  async isAuthenticated(): Promise<PmtBooking> {
    try {
      const bookingData = await this.bookingService.getBookingData();
      if (!!bookingData && hasProp(bookingData, 'customer') && hasProp(bookingData, 'token')) {
        if (bookingData.customer && bookingData.token) {
          return bookingData;
        } else {
          return null;
        } 
      } else {
        return null;
      }      
    } catch(err) {
      console.log('isAuthenticated error', err.message);
    }
  }

}
