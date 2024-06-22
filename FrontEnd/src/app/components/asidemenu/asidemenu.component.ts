import { Component,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {DevExtremeModule} from "devextreme-angular"
import notify from "devextreme/ui/notify";
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-asidemenu',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet,FormsModule,LoginComponent,NavbarComponent,RegisterComponent,HttpClientModule,DevExtremeModule,HomeComponent],
  templateUrl: './asidemenu.component.html',
  styleUrl: './asidemenu.component.css'
})
export class AsidemenuComponent {

  
  currentUrl: string='';
  flag:boolean=false;
   constructor(private route: ActivatedRoute,private cookieService: CookieService,private router: Router) {
    // this.flag=!this.flag;
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

      // Check if the current URL is the login route
      // alert(this.flag);
      // this.router.events.subscribe(event => {
      //   if (event instanceof NavigationEnd) {
      //     this.flag = event.url.includes('/login');

      //   }
      // });

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
    this.router.navigate(['/home']);
  }
}
