import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../people';
import { PeopleDbService } from '../people-db.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})

export class FamousPeopleComponent implements OnInit {

    title = 'peopleDatabse';  

    constructor(private route: ActivatedRoute, private peopleAPI : PeopleDbService) {
  

     }

    peopleInfo : People = ({} as any) as People ;

    ngOnInit() : void {
        this.peopleAPI.getPeople().subscribe((data)=>{
             this.peopleInfo = data;
           
            });  
                   
    }

}
