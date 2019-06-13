import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { _throw}  from 'rxjs/observable/throw';
import { ApiResponse, Message } from '../../models';
import { ApiService, EnvService } from '../../services';


@Injectable()
export class Messages {

  messages: Message[] = [];

  constructor(private apiService: ApiService,
        private env: EnvService) {
    const messages = []; // Initial Values
    for (const message of messages) {
      this.messages.push(new Message(message));
    }
    // this.recordRetrieve();
  }

  query(params?: any) {
    if (!params) {
      return this.messages;
    }
    return this.messages.filter((message) => {
      for (const key in params) {
          if (params.hasOwnProperty(key)) {
            const field = message[key];
            if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return message;
            } else if (field === params[key]) {
              return message;
            }
          }
      }
      return null;
    });
  }

  add(record: Message) {
    this.messages.push(record);
  }

  delete(record: Message) {
    this.messages.splice(this.messages.indexOf(record), 1);
  }

  async recordRetrieve(queryString = ''): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/messages${queryString}`;
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

  async recordCreate(record: Message): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/messages`;
      const proRes = this.apiService.postApi(url, record).pipe(
          map((res: ApiResponse) => {
              if (res.success && res.payload) {
                  console.log('recordCreate() successful');
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordUpdate(record: Message, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/messages/${record.id}`;
      const proRes = this.apiService.updateApi(url, payload).pipe(
          map((res: ApiResponse) => {
              if (res.success) {
                  this.delete(record);
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }

  async recordDelete(record: Message, payload): Promise<ApiResponse> {
      const url = `${this.env.API_URL}/messages/${record.id}`;
      const proRes = this.apiService.deleteApi(url).pipe(
          map((res: ApiResponse) => {
              if (res.success) {
                  this.delete(record);
              } else {
                  _throw(res.message);
              }
              return res;
          }));
      return await proRes.toPromise();
  }
}
