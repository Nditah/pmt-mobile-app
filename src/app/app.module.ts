import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {IonicStorageModule} from '@ionic/storage';
import {CalendarModule} from "ion2-calendar";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import { Angular4PaystackModule } from 'angular4-paystack';

import {WeatherProvider} from '../providers/weather';
import {MessageService} from '../providers/message-service-mock';

import { PipesModule } from '../pipes/pipes.module';

import { BookingService, ApiService, AuthService, EnvService, ErrorInterceptor, JwtInterceptor } from '../services';
import { Terminals, Messages, Notifications, PmtBookings, PmtReservations, PmtRoutes,
  PmtSchedules, Ratings, Settings } from '../providers';

import { pmtIonicApp } from "./app.component";

@NgModule({
  declarations: [
    pmtIonicApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Angular4PaystackModule,
    IonicModule.forRoot(
      pmtIonicApp,
      {
        preloadModules: true,
        scrollPadding: false,
        scrollAssist: true,
        autoFocusAssist: false
      }
    ),
    IonicStorageModule.forRoot({
      name: '__pmtDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    CalendarModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    pmtIonicApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    MessageService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiService, AuthService, EnvService, 
    Terminals, Messages, Notifications, PmtBookings, PmtReservations,
    PmtRoutes, PmtSchedules, Ratings, Settings, BookingService,
  ]
})

export class AppModule {
}
