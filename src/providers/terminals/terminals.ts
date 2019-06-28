import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { Storage } from '@ionic/storage';
import { ApiResponse, Terminal } from '../../models';
import { ApiService, EnvService } from '../../services';
import TerminalData from './table';

@Injectable()
export class Terminals {

  terminals: Array<any> = [];

  constructor(public storage: Storage,
    private env: EnvService,
    private apiService: ApiService) {
    const records: Array<Terminal> = this.sortTerminal(TerminalData);
    for (const item of records) {
      this.terminals.push(new Terminal(item));
    }
      const queryString = `?sort=name`;
      this.recordRetrieve(queryString).then(data => {
        if(data.success){
          if(data.payload.length > 0) {
            this.terminals = data.payload;
            this.storage.set('terminals', JSON.stringify(this.terminals)).then(data => data);
          }
        } else {
          this.storage.get('terminals').then(data => {
            if(data && JSON.parse(data).length > 0 ) {
              this.terminals = JSON.parse(data);
            }
            
          });
        }
      }).catch(err => console.log(err));  
  }

  query(params?: any) {
    if (!params) {
      // return this.sortTerminal(this.terminals);
      return this.terminals;
    }
    return this.terminals.filter((terminal) => {
      for (const key in params) {
        const field = terminal[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return terminal;
        } else if (field == params[key]) {
          return terminal;
        }
      }
      return null;
    });
  }

  add(terminal: Terminal) {
    this.terminals.push(terminal);
  }

  delete(terminal: Terminal) {
    this.terminals.splice(this.terminals.indexOf(terminal), 1);
  }

  sortTerminal(arrayOfTerminals: Array<Terminal>): Array<Terminal> {
    const t = arrayOfTerminals.sort( function compareTerminals(i: Terminal, j: Terminal) {
        if (i.name < j.name) { return -1; }
        if (i.name > j.name) { return 1; }
        return 0;
    });
    return t;
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
    const url = `${this.env.API_URL}/terminals${queryString}`;
    const proRes = this.apiService.getApi(url).pipe(
        map((res: ApiResponse) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
                this.terminals = res.payload;
            } else {
                _throw(res.message);
            }
            return res;
        }));
    return await proRes.toPromise();
  }

}
