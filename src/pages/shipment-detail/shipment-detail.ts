import { Component } from "@angular/core";
import { IonicPage, NavParams, NavController, ToastController } from "ionic-angular";
import { PmlShipments } from "../../providers";
import { PmlShipment, Customer } from "../../models";

@IonicPage({
  name: 'page-shipment-detail',
  segment: 'shipment-detail'
})

@Component({
    selector: 'page-shipment-detail',
    templateUrl: 'shipment-detail.html'
})
export class ShipmentDetailPage {

  public vehicleLogo: string = '/assets/img/bus-logo.jpg';
  public emptySeat: string = '/assets/img/seat-black-empty.svg';
  public occupiedSeat: string = '/assets/img/seat-black.png';
  public selectedSeat: string = '/assets/img/seat-blue.png';
  
  param: number;
  public shipment: PmlShipment;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public shipmentService: PmlShipments) {
    // set sample data
    this.param = this.navParams.get('id');
    const shipment = this.shipmentService.query({ id: this.param })[0];
    this.shipment = shipment ? shipment: this.shipmentService.query()[0];
    console.log(shipment);
  }

  ionViewDidLoad() {
    console.log('ShipmentDetailPage ionViewDidLoad')
  }

  viewSummary(reservation) {
    let toast = this.toastCtrl.create({
      message: 'Here is your booking details',
      cssClass: 'cruiseToast',
      duration: 2000
    });
    toast.present(toast);
  }
  
  getName(customer: Customer){
    let name = customer.title || '';
    name += ' ' + customer.surname || '';
    name += ' ' + customer.other_name || '';
    return name.trim();
  }
}
