
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Donuts, Result } from './donut';      // importing interface


@Injectable({
  providedIn: 'root'
})

export class DonutDbService {

  urlbase:string = "https://grandcircusco.github.io/demo-apis/donuts.json";

  constructor(private httpClient:HttpClient) {
   }

  getDonut() : Observable<any> {
  
    return this.httpClient.get<Donuts>(this.urlbase)
    .pipe(map((data)=> data.results));

  }

}
