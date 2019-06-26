import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Weathers } from '../../providers';

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
  weather: any;
  location: {
    state: string,
    city: string
  }

  public locationList: Array<any> = [
    {city: 'Los Angeles', state: 'CA'},
    {city: 'Miami', state: 'FL'},
    {city: 'New York', state: 'NY'},
    {city: 'Seattle', state: 'WA'},
    {city: 'São Paulo', state: 'SP' }
  ]

  constructor(
    public navCtrl: NavController,
    private weatherProvider: Weathers,
    private storage: Storage) {
  }

  ionViewWillEnter() {

    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);

      } else {
        this.location = {
          state: 'NY',
          city: 'New York'
        }
      }

      this.getWeather(this.location)

    });

  }

  public getWeather(location) {
    if (typeof location === 'string') {
      this.location = JSON.parse(location);
    } else {
      this.location = location;
    }

    this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe((weather: any) => {
      this.weather = weather.current_observation;
    });
  }

}
