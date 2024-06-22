import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DevExtremeModule } from 'devextreme-angular';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-nextduedate',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './nextduedate.component.html',
  styleUrl: './nextduedate.component.css'
})
export class NextduedateComponent {
  finalData:any;
  constructor(private DataService:DataService,private router: Router  ){
    this.finalData = DataService.getData();
  }

  GetPaymentProof(){
    console.log("PaymentProof");
    this.router.navigate(['/paympentpf']);

  }
}
