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

     
    peopleInfo : People [] | undefined;

    constructor( private peopleAPI : PeopleDbService) { }


    ngOnInit() : void {
        this.getAllPeople();
    }
    
    getAllPeople():void{  
      this.peopleAPI.getPeople().subscribe((data)=>{
        this.peopleInfo = data});
        console.log(this.peopleInfo);
    }

}
