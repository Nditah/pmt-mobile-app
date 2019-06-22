import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { ApiResponse, Terminal } from '../../models';
import { ApiService, EnvService } from '../../services';
import TerminalData from './table';

@Injectable()
export class Terminals {

  terminals: Array<any> = [];

  constructor(private apiService: ApiService,
    private env: EnvService) {
    const records: Array<Terminal> = TerminalData;
    for (const item of records) {
      this.terminals.push(new Terminal(item));
    }

    // this.getTerminals();
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
