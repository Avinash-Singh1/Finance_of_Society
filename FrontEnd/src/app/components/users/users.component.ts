import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DevExtremeModule } from 'devextreme-angular';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  finalData:any;
  constructor(private DataService:DataService){
    this.finalData = DataService.getData();
  }
}
