import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private role: string;
  constructor(private http: HttpClient,) {
    // this.role = localStorage.getItem('name')
   }

   getnames = () => {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getweather = (value) => {
    // console.log("****",this.role);
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=3474420c02029ecacb9102080646d143`);
  }
}
