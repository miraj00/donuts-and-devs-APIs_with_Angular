import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donut } from './donut';      // importing interface


@Injectable({
  providedIn: 'root'
})

export class DonutDbService {

  urlbase:string = "https://grandcircusco.github.io/demo-apis/donuts.json";
  constructor(private httpClient:HttpClient) {

   }

   getDonut() : Observable<Donut> {
    return this.httpClient.get<Donut>(this.urlbase);

  }
}
