import { Component,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {DevExtremeModule} from "devextreme-angular"
import notify from "devextreme/ui/notify";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './login/login.component';
import { AsidemenuComponent } from './components/asidemenu/asidemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,AsidemenuComponent, RouterOutlet,FormsModule,LoginComponent,NavbarComponent,RegisterComponent,HttpClientModule,DevExtremeModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {

  
  currentUrl: string='';
  flag:boolean=false;
   constructor(private route: ActivatedRoute,private cookieService: CookieService,private router: Router) {
    // this.flag=!this.flag;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.flag = event.url.includes('/login');
        // this.flag =  event.url.includes('/login') ||event.url.includes('/');
          console.log(" flag: ",event.url);
          if(event.url=='/login' ||event.url=='/' ||event.url=='/home'){
              this.flag = true;
          }
          else
          {
            this.flag =false;
          }
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
    this.router.navigate(['/']);
  }

 
}

// import { Component } from '@angular/core';
// import { DxDataGridModule } from 'devextreme-angular';
// @Component({
//   selector: 'app-root',
//     standalone: true,
//     imports: [DxDataGridModule],
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.css'




// })
// export class AppComponent {
//   data: any[] = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Doe', age: 25 },
//     // ... other data
//   ];

//   columns: any[] = [
//     { dataField: 'id', caption: 'ID' },
//     { dataField: 'name', caption: 'Name' },
//     { dataField: 'age', caption: 'Age' },
//     // ... other columns
//   ];
// }
