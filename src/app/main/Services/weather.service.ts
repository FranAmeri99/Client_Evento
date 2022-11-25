import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  URI:string =''
  Key:string= 'X5GXaXz44q48XXF&ll'
  constructor(private _http: HttpClient) {
    this.URI=`https://api.tutiempo.net/json/?lan=es&apid=${this.Key}&lid=42926`
   }
   getWather(){
    return this._http.get(this.URI)
   }

}
