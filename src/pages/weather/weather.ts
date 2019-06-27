import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Weathers } from '../../providers';
import { Weather } from '../../models';
import { map } from 'rxjs/operators';


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

  record: Weather;
  wLocation: {
    city: string,
    country: string
  }

  public locationList: Array<{ city: string, country: string }> = [
    { city: 'Aba', country: 'ng' },
    { city: 'Abakaliki', country: 'ng' },
    { city: 'Abuja', country: 'ng' },
    { city: 'Afikpo', country: 'ng' },
    { city: 'Akure', country: 'ng' },
    { city: 'Asaba', country: 'ng' },
    { city: 'Awka', country: 'ng' },
    { city: 'Benin', country: 'ng' },
    { city: 'Calabar', country: 'ng' },
    { city: 'Ekiti', country: 'ng' },
    { city: 'Enugu', country: 'ng' },
    { city: 'Enugu Ezike', country: 'ng' },
    { city: 'Ibadan', country: 'ng' },
    { city: 'Ibafo', country: 'ng' },
    { city: 'Ikom', country: 'ng' },
    { city: 'Ilorin', country: 'ng' },
    { city: 'Jos', country: 'ng' },
    { city: 'Kaduna', country: 'ng' },
    { city: 'Kano', country: 'ng' },
    { city: 'Katsina', country: 'ng' },
    { city: 'Lagos', country: 'ng' },
    { city: 'Mararaba', country: 'ng' },
    { city: 'Minna', country: 'ng' },
    { city: 'Nnewi', country: 'ng' },
    { city: 'Nsukka', country: 'ng' },
    { city: 'Obollo Afor', country: 'ng' },
    { city: 'Onitsha', country: 'ng' },
    { city: 'Owerri', country: 'ng' },
    { city: 'Port Harcourt', country: 'ng' },
    { city: 'Suleja', country: 'ng' },
    { city: 'Umuahia', country: 'ng' },
    { city: 'Uyo', country: 'ng' },
    { city: 'Warri', country: 'ng' },
    { city: 'Yenagoa', country: 'ng' },
];


  constructor(
    public navCtrl: NavController,
    private weatherProvider: Weathers) {
  }

  ionViewWillEnter() {
    //* get favourite location from storage?
  }

  getIcon(name= '01d.png') {
    return `http://openweathermap.org/img/wn/${name}@2x.png`;
  }

  public getWeather(location) {
    try {
        this.weatherProvider.getWeather(location.city, location.country)
        .subscribe((data: any) => {
          this.record = data;
        }, 
        error => {
          console.log(error);
        });
      } catch (err) {
        console.log(err);
      }
  }

  async getWeather2(location): Promise<any> {
    try {
      await this.weatherProvider
      .getWeather(location.city, location.country)
      .pipe(map((res: any) => {
              console.log(res);
              return this.record = res;
          })).toPromise();
    } catch (err) {
      console.log(err);
    }
  }

}
