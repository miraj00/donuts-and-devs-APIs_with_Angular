import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './people';      // importing interface


@Injectable({
  providedIn: 'root'
})


export class PeopleDbService {

  urlbase:string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
 
  constructor(private httpClient:HttpClient) {
  }

  getDonut() : Observable<People> {
    return this.httpClient.get<People>(this.urlbase);
  }

}
