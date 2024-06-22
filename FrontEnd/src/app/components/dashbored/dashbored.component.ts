// import { Component } from '@angular/core';

import { Component, OnInit, OnDestroy } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { ActivatedRoute ,Router} from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-dashbored',
  standalone: true,
  imports: [],
  templateUrl: './dashbored.component.html',
  styleUrl: './dashbored.component.css'
})
export class DashboredComponent {
  // constructor(private route: ActivatedRoute) {}


  currentUrl: string='';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      console.log('Current URL:', this.currentUrl);
    });
  }

  logout(){

  }

 
}
