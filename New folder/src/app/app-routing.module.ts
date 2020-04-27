import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestcountriesComponent } from './pages/restcountries/restcountries.component';
import { CountryComponent } from "./country/country.component";
import { CountriesService } from './countries.service';

const routes: Routes = [
  {
    path:'',
    component : CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
