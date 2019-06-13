import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from "ionic-angular";


@Injectable()
export class JwtInterceptor  implements HttpInterceptor {

  token: string = '';

  constructor(public storage: Storage,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
      this.getToken().then((data) => data)
      .catch((err) => console.log(err));
    }

  // Intercepts all HTTP requests!
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`\n================ ${this.token} ===================\n`);
    if (!!this.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${this.token}`,
          'cache-control': 'no-cache',
        }
      });
      console.log('\n================request ===================\n');
      console.log(request);
      console.log('\n================request ===================\n');
    }
    return next.handle(request);
  }

  showNotification(title, message) {
    let forgot = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

  getToken() {
    return this.storage.get('token').then((data) => {
      if (!!data){
        this.token = data;
      }
      return;
    }).catch((err) => {
      throw new Error(`Error getting JWT bookingData, ${err}`);
    });    
  }
}
