import { Component } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Donut, Donuts, Result } from './donut';
import { DonutDbService } from './donut-db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    title = 'donuts-and-devs';

    donutResults : Donuts=({}) as Donuts ;

    Result: Result[] | undefined;

    constructor(private donutAPI:DonutDbService) { }


ngOnInit():void{
  this.donutAPI.getDonut().subscribe((data)=>{
          this.Result = data });
             
}

  
}



