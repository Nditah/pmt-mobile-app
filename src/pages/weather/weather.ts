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
  city: City = {};
  cityWeather: Weather;

  param: any; // cityId

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cityProvider: Cities,
    public weatherProvider: Weathers) {
    this.param = this.navParams.get('id') || '';
    this.cityProvider.recordRetrieve().then(data => {
      this.cities = this.cityProvider.query();
      const [record] = this.cityProvider.query({ id: this.param });
      this.city = record ? record : this.cities[0];
      if (this.city && hasProp(this.city, 'name')) {
        this.getWeather(this.city);
      }
    });
  }

  ionViewWillEnter() {
    //* get favourite location from storage?
    console.log("ionViewWillEnter Cities =>", this.cities );
  }

  getIcon(name) {
    if (name){
      return `http://openweathermap.org/img/w/${name}.png`
    }
    return '';
  }

 async getWeather(c: City) {
   this.city = c;
    const url = `?type=weather&city=${c.name}&country=${c.country_iso2}`;
    try {
        const data = await this.weatherProvider.recordRetrieve(url);
          this.cityWeather = data.payload[0];
          console.log(data);
      } catch(err){
        console.log(err.message);
      }
  }

}
