import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestcountriesComponent } from './pages/restcountries/restcountries.component';
import { CountryComponent } from './country/country.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    RestcountriesComponent,
    CountryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
