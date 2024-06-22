import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {DevExtremeModule} from "devextreme-angular"
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  finalData:any;
  constructor(private DataService:DataService){
    this.finalData = DataService.getData();
  }

}
