import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DevExtremeModule } from 'devextreme-angular';

@Component({
  selector: 'app-amounts',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './amounts.component.html',
  styleUrl: './amounts.component.css'
})
export class AmountsComponent {
  finalData:any;
  constructor(private DataService:DataService){
    this.finalData = DataService.getData();
  }
}
