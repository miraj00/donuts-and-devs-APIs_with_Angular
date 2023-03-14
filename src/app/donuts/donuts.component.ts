import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from '../DonutDetails';
import { DonutDbService } from '../donut-db.service';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})

export class DonutsComponent {

  title = 'donutDatabse';
 
  //called only once when the app starts 
  constructor(private route: ActivatedRoute, private api: DonutDbService){
   }
 
  loading:boolean = true;
 
  id:number = -1; 
  donutInfo:DonutDetails=({} as any) as DonutDetails;
 
  //Called when the component gets loaded 
 ngOnInit(){
   let idstring:string|null =  this.route.snapshot.paramMap.get('id'); 

      if(idstring !== null){
       
          this.id = parseInt(idstring);
          console.log(this.id);
        
          this.api.getDonutDetails(this.id).subscribe(
              (donutResult) => {
                  this.donutInfo = donutResult;
                  this.loading = false;
               }
          );
      }
  }
}