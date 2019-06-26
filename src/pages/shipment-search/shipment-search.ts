import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController, ModalController, PopoverController} from "ionic-angular";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PmlShipments } from "../../providers";


@IonicPage({
  name: 'page-shipment-search',
  segment: 'shipment-search',
})

@Component({
  selector: 'page-shipment-search',
  templateUrl: 'shipment-search.html'
})

export class ShipmentSearchPage implements OnInit {

  public searchForm: FormGroup;

  constructor(public navCtrl: NavController,
    public pmlShipments: PmlShipments,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController) {
    // set sample data
    this.menuCtrl.swipeEnable(true, 'authenticated');
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      code: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(14)])],
    });
  }

  ionViewDidLoad() {
    console.log('ShipmentSearch loaded!');
  }

  shipmentList() {
    this.navCtrl.push('page-shipment-list');
  }

  searchShipment() {
    if (this.searchForm.value) {
      const payload = this.searchForm.value;
        this.navCtrl.push('page-shipment-list', {
          'code': payload.code
        });

    } else {
        return;
    }
  }

}

//
