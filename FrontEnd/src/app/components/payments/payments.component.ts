import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DevExtremeModule } from 'devextreme-angular';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  finalData:any;
  constructor(private DataService:DataService){
    this.finalData = DataService.getData();
  }
}
