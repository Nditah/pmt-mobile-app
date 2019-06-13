import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'page-local-weather',
  segment: 'local-weather',
  priority: 'high'
})

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
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
    private weatherProvider: WeatherProvider,
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
