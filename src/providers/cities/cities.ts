import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ApiResponse, City } from '../../models';
import { ApiService, EnvService } from '../../services';
import CityData from './table';


@Injectable()
export class Cities {

  cities: City[] = [];

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService) {
      const queryString = `?country_iso2=ng&sort=name,state_id.id`;
      this.recordRetrieve(queryString).then(data => {
          if(data.success && data.payload.length > 0){
            // this.cities = data.payload;
            this.storage.set('cities', JSON.stringify(this.cities))
            .then(data => data).catch(err => console.log(err.message));
          } else {
            this.storage.get('cities').then(data => {
              this.cities = JSON.parse(data) ||  this.sortCity(CityData);
            }).catch(err => console.log(err.message));

          }

        }).catch(err => console.log(err.message));                
  }

  query(params?: any) {
    if (!params) {
      return this.cities;
    }
    return this.cities.filter((city) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = city[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return city;
            } else if (field === params[key]) {
              return city;
            }
          }
      }
      return null;
    });
  }


  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
    const query = queryString || `?country_iso2=ng&sort=name,state_id.id`;
    const url = `${this.env.API_URL}/cities${query}`;
    const proRes = this.apiService.getApi(url).pipe(
        map((res: ApiResponse) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
                this.cities = res.payload;
            }
            return res;
        }));
      return await proRes.toPromise();
  }

  sortCity(arrayOfCities: Array<any>): Array<City> {
    const t = arrayOfCities.sort( function compareCities(i: City, j: City) {
        if (i.name < j.name) { return -1; }
        if (i.name > j.name) { return 1; }
        return 0;
    });
    return t;
  }
}
