import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Weathers, Cities } from '../../providers';
import { Weather, City } from '../../models';
import { hasProp } from '../../helpers';

@IonicPage({
  name: 'page-weather',
  segment: 'weather',
  priority: 'high'
})

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  cities: Array<City> = [];
  city: City;
  cityWeather: Weather;

  param: any; // cityId

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cityProvider: Cities,
    public weatherProvider: Weathers) {
    this.param = this.navParams.get('id');
    const [record] = this.cityProvider.query({ id: this.param });
    console.log("Params, Record =>", this.param , this.city );
    this.city = record ? record : {};
  	if (this.city && hasProp(this.city, 'name')) {
      this.getWeather(this.city);
    }
  }

  ionViewWillEnter() {
    //* get favourite location from storage?
  }

  getIcon(name) {
    const icon = name || '01d.png';
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

 async getWeather(c: City) {
    const url = `?type=weather&city=${c.name}&country=${c.country_iso2}`;
    try {
        const data = await this.weatherProvider.recordRetrieve(url);
          this.cityWeather = data.payload;
      } catch(err){
        console.log(err);
      }
  }

}
