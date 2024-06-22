import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute,Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router,private cookieService: CookieService,private route: ActivatedRoute) { }

  logout() {
    console.log("I am ");
    // Perform logout logic
    this.cookieService.delete('token');
    // Redirect to login
    this.router.navigate(['/home']);
  }

  GetUsers(){
    
  }

  // GetUsers(){
  //   this.http.post("/api/login",val).subscribe((response:any)=>{
  //     if(response)
  //     {
  //       this.router.navigate(['/dashboared']);
  //       this.cookieService.set('token', response.token);
  //     }
  //   });
  //   console.log("Get Users: ");
  // }
}
