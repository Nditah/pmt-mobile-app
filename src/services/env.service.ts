import { Injectable } from '@angular/core';

@Injectable()
export class EnvService {
  API_URL = 'https://peacegroup-api.herokuapp.com/api';
  // API_URL = 'http://0.0.0.0:5000/api';
  
  constructor() { }
}
