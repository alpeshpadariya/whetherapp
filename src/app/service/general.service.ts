import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  noAuthHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(public http: HttpClient) { }  

  getWhetherData() {
    return this.http.get("http://api.weatherstack.com/current?access_key=add1408d735f31da7ecedd21f4f1466c&query=New%20York");
  }
}
