import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PmlShipments }  from "../../providers";
import { PmlShipment } from "../../models";

@IonicPage({
  name: 'page-shipment-list',
  segment: 'shipment-list'
})

@Component({
    selector: 'page-shipment-list',
    templateUrl: 'shipment-list.html'
})
export class ShipmentListPage implements OnInit {

  public shipments: Array<PmlShipment> = [];
  public vehicleLogo: string = '/assets/img/bus-logo.jpg';
  param: number;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pmlShipments: PmlShipments) {
      this.param = this.navParams.get('code');
      const record = this.pmlShipments.query({ code: this.param });
      console.log(record);
      this.shipments = record ? record : [];
      this.retrieveData();
  }

  ionViewDidLoad() {
    console.log('ShipmentListPage ionViewDidLoad');
  }

  ngOnInit(){ 
    this.retrieveData();
  }

  retrieveData() {
    const shipments = this.pmlShipments.query() || [];
    if(shipments.length > 0){
    this.shipments = shipments;
    }
  }
  gotToDetail(shipment) {
    this.navCtrl.push('page-shipment-detail', { 'id': shipment.id });
  }

  searchShipment(shipment) {
    this.navCtrl.push('page-shipment-result');
  }
}
