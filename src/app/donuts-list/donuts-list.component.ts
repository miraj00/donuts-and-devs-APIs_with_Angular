import { Component } from '@angular/core';
import { DonutDetails } from '../DonutDetails';
import { DonutDbService } from '../donut-db.service';


@Component({
  selector: 'app-donuts-list',
  templateUrl: './donuts-list.component.html',
  styleUrls: ['./donuts-list.component.css']
})

export class DonutsListComponent {

  
  Result: DonutDetails[] | undefined;

  constructor(private donutAPI:DonutDbService) { }


  ngOnInit():void{
    this.donutAPI.getDonut().subscribe((data)=>{
            this.Result = data });

}
}
