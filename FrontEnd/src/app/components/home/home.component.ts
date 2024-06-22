import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute,private router: Router) {
    
   }
}
