import { WeatherApiService } from './../../services/weather-api.service';
import { Component, OnInit } from '@angular/core';
import { formatDate, getLocaleWeekEndRange } from '@angular/common';
import { timer } from 'rxjs';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent implements OnInit {
  days: any = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor(private weatherService: WeatherApiService) {}
  public weatherData: any = {};
  feel_like: any = {};
  temperature: any = {};
  public value: any = {};
  dailyDetails: any = [];
  weatherDetails: any = [];
  public allDays: any = [];
  dateTime: any = Date;
  ngOnInit(): void {
    this.weather();
    // this.dateTime = new Date();
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
  weather() {
    this.weatherService.getweather().subscribe((data: any) => {
      if (data) {
        this.weatherData = data;
        // this.weatherData1 = data.feels_like;
        // this.temperature = data.;
        this.dailyDetails = data.daily;
        this.weatherDetails = data.weather;
        this.value = data.daily[0];
        this.allDays = data.daily;
        data.daily.forEach((val: any) => {
          let dtIdx = new Date(val.dt * 1000).getDay();
          val.dayName = this.days[dtIdx];
        });
        console.log(this.value.temp.day);
        console.log(data);
        console.log(this.allDays);
      }

      // const feather = feather.replace();
    });
  }
  everyDayDetails(allDay: any) {
    this.value = allDay;
  }
}
