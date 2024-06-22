import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import {DevExtremeModule} from "devextreme-angular"
// import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-tansactions',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './tansactions.component.html',
  styleUrl: './tansactions.component.css'
})
export class TansactionsComponent {
  finalData:any;
  constructor(private DataService:DataService){
    // this.finalData = DataService.getTransection();
    // console.log("Finaldata: ",this.finalData);



    this.DataService.getTransection().subscribe(
      (data) => {
        this.finalData = data;
        console.log('Transactions:', this.finalData);
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );


  }
}
