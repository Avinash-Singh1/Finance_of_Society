import { Component,OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {DevExtremeModule} from "devextreme-angular"
import notify from "devextreme/ui/notify";
// import { NavbarComponent } from './navbar/navbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-dashbored',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './dashbored.component.html',
  styleUrl: './dashbored.component.css'
})
export class DashboredComponent implements OnInit{
  // constructor(private route: ActivatedRoute) {}



  
  currentUrl: string='';
  flag:boolean=false;
   constructor(private route: ActivatedRoute,private cookieService: CookieService,private router: Router) {
    // this.flag=!this.flag;
    
  // Check if the current URL is the login route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.flag = event.url.includes('/login');
      }
    });

   }
  //  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.currentUrl = this.router.url;
      console.log('Current URL:', this.currentUrl);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Check if the current URL is the login route
          // this.flag = event.url.includes('/login');

          // alert(this.flag);
        }
      });

  }
  title = 'Frontend';

  FormdataFun(val:any){
    console.log("Val: ",val);
  }

  logout() {
    console.log("I am ");
    // Perform logout logic
    this.cookieService.delete('token');
    // Redirect to login
    this.router.navigate(['/']);
  }
 

}
