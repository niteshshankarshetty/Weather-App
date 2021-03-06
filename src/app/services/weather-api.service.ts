import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseurl =
    'https://api.openweathermap.org/data/2.5/onecall?lat=19.21&lon=72.97&exclude=current,minutely,hourly,alerts&cnt=7&appid=3c96958170308c49ffa53b306d03f122';
  constructor(private http: HttpClient) {}
  getweather() {
    return this.http.get(this.baseurl);
  }
}
