import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../countries.service";
import { countryname } from "src/app/core/models/api";
import { HttpClient, HttpParams } from "@angular/common/http";
// import { countryname } from "src/app/core/models/api";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent implements OnInit {
  countriesData;

  constructor(
    private countryService: CountriesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  getCountries = () => {
    this.countryService.getnames().subscribe((allCountryNames) => {
      this.countriesData = allCountryNames;
      console.log(allCountryNames);
    });
  };
  alertTemp = (countryName) => {
    this.countryService.getweather(countryName).subscribe((data : countryname) => {
      const temp = data.main.temp;
      console.log(data);
      alert(temp);
    });
  };
}




//   getbtn = () => {
//     this.data = [];
//     this.fetch = [];
//     this.id = [];
//     // this.degree();
//     const button = document.querySelector(".box");
//     this.countryService.getnames().subscribe((x) => {
//       this.data = x;
//       //  console.log(x);
      
//     });
//   }
//   passValue(){
//     this.data.forEach((value) => {
//       // console.log(value.name);
//       this.countryService.getweather(value.name)
//       .subscribe((data : countryname)=>{
//         this.id = data.main.temp - (273.15);
//         // button.addEventListener("click", );
//         alert(this.id);
//       })
//   });
//   }
//  degree = () => {
//     // alert(this.id);
//   }
// }