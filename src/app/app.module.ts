import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';     // import HttpClientModule

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { RouterModule, Routes } from '@angular/router';
import { DonutsListComponent } from './donuts-list/donuts-list.component';       // import router Module


// describe router paths
const routes: Routes = [
  {path:"", component:DonutsListComponent}, 
  {path:"donut/:id", component:DonutsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    FamousPeopleComponent,
    DonutsListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,                    // import HttpClientModule
    [RouterModule.forRoot(routes)]       // import router Module
                     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
