import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AlertController } from "ionic-angular";
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor  implements HttpInterceptor {

  constructor(private storage: Storage, private alertCtrl: AlertController) { }
 
  // Intercepts all HTTP requests!
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let promise = this.storage.get('token');

      return Observable.fromPromise(promise).mergeMap(token => {
            let clonedReq = this.addToken(request, token);
            return next.handle(clonedReq).pipe(catchError(error => {
                console.log('JwtInterceptor => ', error, error.error);
                let alert = this.alertCtrl.create({
                    title: 'Error!',
                    message: error.message || 'Please check your network connection.',
                    buttons: ['OK']
                });
                alert.present();
                return _throw(error);
                }));
          });
  }

  // Adds the token to your headers if it exists
  private addToken(request: HttpRequest<any>, token: string) {
      if (token) {
          let clone: HttpRequest<any>;
          clone = request.clone({
              setHeaders: {
                  Accept: `application/json`,
                  'Content-Type': `application/json`,
                  Authorization: `Bearer ${token}`
              }
          });
          return clone;
      }
      return request;
  }
}
