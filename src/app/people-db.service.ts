import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { People } from './people';      // importing interface


@Injectable({
  providedIn: 'root'
})


export class PeopleDbService {

  urlbase:string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
 
  constructor(private httpClient:HttpClient) {
  }

  getPeople() : Observable<People> {
    console.log(this.httpClient.get<People>(this.urlbase).pipe(map((data)=> data)));
    return this.httpClient.get<People>(this.urlbase).pipe(map((data)=> data));
   
  }

}
