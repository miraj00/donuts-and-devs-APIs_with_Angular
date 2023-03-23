
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Donuts, Result } from './donut';      // importing interface
import { DonutDetails } from './DonutDetails';


@Injectable({
  providedIn: 'root'
})

export class DonutDbService {
  // for all donuts 
  urlbase:string = "https://grandcircusco.github.io/demo-apis/donuts.json";

  constructor(private httpClient:HttpClient) {
    }

  getDonut() : Observable<any> {
  
    return this.httpClient.get<Donuts>(this.urlbase)
    .pipe(map((data)=> data.results));

  }


  // url for individual donut info : 
  url:string = "https://grandcircusco.github.io/demo-apis/donuts";

  getDonutDetails(id:number){
    console.log(this.httpClient.get<DonutDetails>(this.url +"/"+ id +".json"));
    return this.httpClient.get<DonutDetails>(this.url +"/"+ id +".json");
  }

}
