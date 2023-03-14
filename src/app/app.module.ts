import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';     // import HttpClientModule

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';


@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    FamousPeopleComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule                 // import HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
