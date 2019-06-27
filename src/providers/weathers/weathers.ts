import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
// https://openweathermap.org/current

@Injectable()
export class Weathers {
  
  apiKey = 'e991e1db6b5fdbc1115d0be452700281';
  url = 'http://api.openweathermap.org/data/2.5/weather';
  // 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city='Enugu', country = 'ng'): Observable<any> {
    return this.http.get(`${this.url}?q=${city},${country}&APPID=${this.apiKey}&units=metric`)
    .pipe(map(this.extractData));
  }

  // Private
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError2(error: Response | any) {
    let errMsg: string;
    if (error.error instanceof Response) {
      const err = error.error|| '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.error.message ? error.error.message : error.error.toString();
    }
    console.error(errMsg);
    return _throw(errMsg);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return _throw(error.error);
  }
}
