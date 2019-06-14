import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { AuthService } from "../services";
import { Customer } from "../models";
import { hasProp } from "../helpers";


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class pmtIonicApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'page-walkthrough';
  showMenu: boolean = true;
  // rootNavCtrl: NavController;
  appMenuItems: Array<MenuItem>;
  public user: Customer;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    private authService: AuthService,
    public storage: Storage,
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: 'page-home', icon: 'home'},
      // {title: 'Messages', component: 'page-message-list', icon: 'mail'},
      // {title: 'Local Weather', component: 'page-local-weather', icon: 'sunny'},
      {title: 'Terminals', component: 'page-terminal-list', icon: 'pin'},
      {title: 'Booking List', component: 'page-booking-list', icon: 'briefcase'},
      {title: 'Support', component: 'page-support', icon: 'help-buoy'},
      {title: 'Walkthrough', component: 'page-walkthrough', icon: 'photos'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.hide();

      //***  Check Auth
      this.checkAuthorization();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout(): void {
    this.storage.remove('bookingData').then((data) => data);
    this.nav.setRoot('page-auth');
    return;
  }

  editProfile() {
    this.nav.setRoot('page-edit-profile');
  }

  checkAuthorization(): void { 
    this.authService.isAuthenticated().then((bookingData) => {
      if (!bookingData){
        this.rootPage = 'page-walkthrough';
        return;
      } else {
        if(hasProp(bookingData, 'customer')){
          this.user = bookingData.customer;
          this.rootPage ='page-home';
          return;
        }
        this.rootPage ='page-auth';
        return;
      }
    }).catch((err) => err);

  }
}
