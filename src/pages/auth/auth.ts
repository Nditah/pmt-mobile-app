import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { AuthService, BookingService } from '../../services';
import { LoginResponse, ApiResponse, PmtBooking } from "../../models";
import { hasProp } from "../../helpers";


@IonicPage({
  name: 'page-auth',
  segment: 'auth',
})

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage implements OnInit {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  public bookingData: PmtBooking;
  auth: string = "login";

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    public bookingService: BookingService,
    public menu: MenuController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.initBooking().then();
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(100)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.onRegisterForm = this.formBuilder.group({
      surname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(30)])],
      other_name: ['', Validators.compose([ Validators.required ])],
      gender: ['', Validators.compose([ Validators.required ])],
      email: ['', Validators.compose([ Validators.required ])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      contact_person: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      contact_person_phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
    });
  }

  async initBooking() {
    this.bookingData = await this.authService.isAuthenticated();
    if (this.bookingData){
      const page = hasProp(this.bookingData , 'bookingStage') ? this.bookingData.bookingStage : 'page-home';
      this.navCtrl.setRoot(page);
    } else {
      // console.log('..returns ', this.bookingData);
    }
    return;
  }

  validateEmail(email: string) {
    const re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(email);
  }

  login() {
    const { username, password } = this.onLoginForm.value;
    const payload = { email: username, phone: username, password };
    if (this.validateEmail(username)){
      delete payload.phone;
    } else {
      delete payload.email;
    }
    this.authService.postLogin(payload).then((res: any) => {
      if (res.success) {
        this.initBooking().then();
        this.authService.createToast(`Login successful. Welcome! PMT Online`);
        this.navCtrl.setRoot('page-home');
        return;
      }
    }).catch((error) => {
        this.authService.createToast(error.message);
      });
  }

  register() {
    // this.navCtrl.setRoot(RegisterPage);
    const payload = this.onRegisterForm.value;
    payload.customer_type = 'INDIVIDUAL';
    return this.authService.createCustomer(payload).then((data: ApiResponse) => {
      // console.log('Registration response', data);
      if (data.success) {
        const { email, phone, password } = payload;
        return this.authService.postLogin({ email, phone, password })
          .then((response: LoginResponse) => {
          console.log("Response => ", response);
            if (!response.success) {
              return this.authService.createToast(response.message);
            }
            // this.initBooking().then();
          }).catch((error) => {
            const msg = error.message || 'Network failure or server unavailable';
            return this.authService.createToast(msg);
          })
        }
        this.authService.createToast(data.message);
      }).catch(error => { 
        this.authService.createToast(error.message);
      });
  }

  
  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter your Phone number for an OTP.",
      inputs: [
        // { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'phone', placeholder: 'Phone', type: 'tel' },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {}
        },
        {
          text: 'Send',
          handler: data => {
            if (! /^[0-9]{11}$/.test(data.phone)){
              this.authService.createToast("Please input a valid mobile number with 11 digits");
              return false;
            }
            console.log('Send clicked', data);
            data.user_type = 'CUSTOMER';
            this.authService.postOtp(data).then(res => {
              const msg = res.success ? 'OTP successfully sent' : res.message;
              let toast = this.toastCtrl.create({
                message: msg,
                duration: 5000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();              
            }).catch(err => {
              let toast = this.toastCtrl.create({
                message: 'Error sending OTP message. Please try again later or contact support',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();  
            });

          }
        }
      ]
    });
    forgot.present();
  }

/**
   * Toast creator
   * @param message
   */
  createToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 3000
    });
    toast.present();
  }

}
