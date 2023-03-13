import { Component } from '@angular/core';
import { People } from '../people';
import { PeopleDbService } from '../people-db.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})

export class FamousPeopleComponent {

  title = 'peopleDatabse';  
 people : People = ({} as any) as People;
 
 constructor( private db : PeopleDbService) {
      // db.getPeople().subscribe((result:People)=>{
        
      //   this.people = result;
      // })
 }

}
