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
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
      email: ['', Validators.compose([ Validators.required ])],
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
    // console.log('calling initBooking...');
    this.bookingData = await this.authService.isAuthenticated();
    if (this.bookingData){
      const page = hasProp(this.bookingData , 'bookingStage') ? this.bookingData.bookingStage : 'page-home';
      this.createToast('navigating to ' + page);
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
    const payload = this.onLoginForm.value;
    this.authService.postLogin(payload).then((res: any) => {
      // console.log('auth.service: res =>', res);
    if (res.success) {
      this.initBooking().then();
      this.createToast(`Login successful. Welcome! PMT Online`);
      this.navCtrl.setRoot('page-home');
      return;
    } else {
      this.createToast(res.message);
    }
    }).catch((error) => {
        this.authService.createToast('Network failure or server unavailable');
        console.log(error.message);
      });
  }

  register() {
    // this.navCtrl.setRoot(RegisterPage);
    const payload = this.onRegisterForm.value;
    payload.customer_type = 'INDIVIDUAL';
    return this.authService.createCustomer(payload)
      .subscribe((data: ApiResponse) => {
      // console.log('Registration response', data);
      if (data.success) {
        const { email, phone, password } = payload;
        return this.authService.postLogin({ email, phone, password })
          .then((response: LoginResponse) => {
          // console.log(response);
            if (!response.success) {
              return this.authService.createToast(response['message']);
            }
            this.initBooking().then();
            return;
          }).catch((error) => {
            console.log(error.message);
            return this.authService.createToast('Network failure or server unavailable');
          })
        }
        this.authService.createToast(data.message);
      },
      error => { 
        // console.log(error); 
      },
      () => {}
    );
  }

  
  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you Email to send a reset link password or Phone number for an OTP.",
      inputs: [
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'phone', placeholder: 'Phone', type: 'tel' },
      ],
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
            console.log('Send clicked', data);
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
