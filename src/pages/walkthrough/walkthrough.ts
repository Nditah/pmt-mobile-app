import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController } from 'ionic-angular';

@IonicPage({
	name: 'page-walkthrough',
	segment: 'walkthrough',
	priority: 'high'
})

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: 'How to book <span class="text-light">PMT</span><strong>Online</strong>?',
      description: "Make reservation online to travel any Nigerian city by taking the following steps",
      image: "assets/img/tripionic-ico.png",
    },
    {
      title: "1. Select Route",
      description: "Select your departure terminal and your destination terminal from the drop down list, select the date of travel and optionally the number of seats and click SEARCH to view available buses.",
      image: "assets/img/tripionic-ico.png",
    },
    {
      title: "2. Choose Schedule",
      description: "Available buses your your route are displayed. Select a Bus Schedule and click NEXT.",
      image: "assets/img/tripionic-ico.png",
    },
    {
      title: "3. Select Seat(s)",
      description: "Choose your seat(s) from the AVAILABLE(BLUE) seats shown on the picture. Based on your route, number of seats, the charge would be calculated and the amount displayed. Fill in your name, phone number, next-of-kin and other relevant details and click SUBMIT.",
      image: "assets/img/tripionic-ico.png",
    },
    {
      title: "4. Make Payment",
      description: "Click 'PAY NOW' to go to the interface where you will fill in your ATM card details and effect the payment. An additional service charge of 1.2% would be collected by Paystack. After the confirming the Transaction, you may receive an sms or email.",
      image: "assets/img/tripionic-ico.png",
    }
  ];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
  }

  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(5, 300);
  }

  openHomePage() {
  	this.navCtrl.setRoot('page-home');
  }

  openAuthPage() {
    this.navCtrl.setRoot('page-auth');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}
