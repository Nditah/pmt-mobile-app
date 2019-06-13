import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer, ApiResponse } from "../../models";
import { AuthService, BookingService } from "../../services";
import { HomePage } from "../home/home";
import { hasProp } from '../../helpers';

@IonicPage({
  name: 'page-edit-profile',
  segment: 'edit-profile'
})

@Component({
    selector: 'page-edit-profile',
    templateUrl: 'edit-profile.html'
})
export class EditProfilePage implements OnInit  {

  public editForm: FormGroup;
  user: Customer = null;
  
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public bookingService: BookingService,
    public toastCtrl: ToastController) {
      this.buildForm();
      bookingService.getBookingData().then((data) => {
        if(hasProp(data, 'customer')){
          this.user = data.customer;
          console.log(data.customer);
          this.setForm(this.user);
        } else {
          this.navCtrl.setRoot('page-auth');
        }
      }).catch(err => console.log(err.message));
  }

  ngOnInit() {   
    console.log('this.bookingData =>', this.user);
  }
 
  buildForm() {
    this.editForm = this.formBuilder.group({
      surname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(30)])],
      other_name: ['', Validators.compose([ Validators.required ])],
      gender: ['', Validators.compose([ Validators.required ])],
      email: ['', Validators.compose([ Validators.required ])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
      password: ['', Validators.compose([Validators.minLength(4)])],
      address: ['', Validators.compose([Validators.minLength(4)])],
      contact_person: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      contact_person_phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
    });
  }

  setForm(record) {
      this.editForm.controls['surname'].setValue(record.surname);
      this.editForm.controls['other_name'].setValue(record.other_name);
      this.editForm.controls['gender'].setValue(record.gender);
      this.editForm.controls['email'].setValue(record.email);
      this.editForm.controls['phone'].setValue(record.phone);
      // this.editForm.controls['password'].setValue(record.password);
      this.editForm.controls['address'].setValue(record.address);
      this.editForm.controls['contact_person'].setValue(record.contact_person);
      this.editForm.controls['contact_person_phone'].setValue(record.contact_person_phone);
  }

  validateEmail(email: string) {
    const re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(email);
  }

  onSubmit() {
    console.log('Submitting edit form data.');
    const payload = this.editForm.value;
    console.log('Payload =>', payload);
    return this.authService.updateCustomer(payload, this.user.id)
      .then((data: ApiResponse) => {
      console.log('Registration response', data);
      if (data.success) {
          console.log(data.payload);
        }
        this.authService.createToast(data.message).present();
      }).catch((error) => {
        console.log(error.message);
        return this.authService.createToast('Network failure or server unavailable').present();
      })
  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Your Data was Edited!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot(HomePage);
    }, 3000)
  }

}
