import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Cities } from "../../providers";
import { City } from '../../models';

@IonicPage({
  name: 'page-city-list',
  segment: 'city-list'
})

@Component({
    selector: 'page-city-list',
    templateUrl: 'city-list.html'
})
export class CityListPage {

  records: Array<City> = [];

  constructor(public navCtrl: NavController,
    public cityService: Cities) {
      this.cityService.recordRetrieve().then(data => {
        this.records = data.payload.length > 0 ? data.payload : this.cityService.query();
      });
  }

  itemTapped(city: City) {
    this.navCtrl.push('page-weather', {
      'id': city.id
    });
  }
}
