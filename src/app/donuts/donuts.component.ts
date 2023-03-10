import { Component } from '@angular/core';
import { Donut} from '../donut';
import { DonutDbService } from '../donut-db.service';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  title = 'donutDatabse';
  donut : Donut = ({} as any) as Donut;

  constructor ( private db : DonutDbService) {

      db.getDonut().subscribe((result:Donut)=>{
        this.donut =result;
      })

  }

}
