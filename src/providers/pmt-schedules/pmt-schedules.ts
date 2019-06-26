import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { ApiResponse, PmtSchedule } from '../../models';
import { ApiService, EnvService } from '../../services';
// import sample from './data';

@Injectable()
export class PmtSchedules {

  pmtSchedules: Array<PmtSchedule> = [];
  currentSchedule: PmtSchedule;


  constructor(private apiService: ApiService,
    private env: EnvService) {
    const records: Array<any> = []; // sample 
    for (const item of records) {
      this.pmtSchedules.push(new PmtSchedule(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.pmtSchedules;
    }
    return this.pmtSchedules.filter((pmtSchedule) => {
      // tslint:disable-next-line:forin
      for (const key in params) {
        const field = pmtSchedule[key];
        if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return pmtSchedule;
        } else if (field === params[key]) {
          return pmtSchedule;
        }
      }
      return null;
    });
  }

  add(pmtSchedule: PmtSchedule) {
    this.pmtSchedules.push(new PmtSchedule(pmtSchedule));
  }

  delete(pmtSchedule: PmtSchedule) {
    const index = this.pmtSchedules.findIndex(schedule => schedule.id === pmtSchedule.id);
    this.pmtSchedules.splice(index, 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
    const url = `${this.env.API_URL}/pmt-schedules${queryString}`;
    console.log('GET url ==>', url);
    const proRes = this.apiService.getApi(url).pipe(
        map((res: ApiResponse) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
                res.payload.forEach(element => {
                    this.add(element);
                });
            } else {
                _throw(res.message);
            }
            return res;
        }));
    return await proRes.toPromise();
}


}
