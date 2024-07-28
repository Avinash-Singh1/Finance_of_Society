import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient,private router: Router,private cookieService: CookieService) {
    
   }


  // FormdataFun(val:any){
  //   console.log("Val: ",val);
  //   this.http.post("/api/login",val).subscribe((response:any)=>{
  //     // console.log("response: ",response);
  //     const userdata =response.user;
  //           console.log("userdata: ",userdata);

  //     if(userdata.role=='2')
  //     {
  //       console.log("2 in ")
  //       this.router.navigate(['/dashboared']);
  //       this.cookieService.set('token', response.token);
  //     }
  //     else if(userdata.role==1){
  //       console.log("1 in ")

  //       this.router.navigate(['/userdash']);
  //       this.cookieService.set('token', response.token);

  //     }
  //     else
  //     {
  //       alert("Invalid Cred");
  //     }
  //   });


  // }

  FormdataFun(val: any) {
    console.log("Form data:", val);
  
    this.http.post("/api/login", val).subscribe(
      (response: any) => {
        console.log("Response received:", response);
  
        const userdata = response.user;
        console.log("User data:", userdata);
  
        if (userdata && userdata.role) {
          if (userdata.role === '2') {
            console.log("Navigating to dashboard");
            this.cookieService.set('token', response.token);
            this.router.navigate(['/dashboared']);
          } else if (userdata.role === '1') {
            console.log("Navigating to user dashboard");
            this.cookieService.set('token', response.token);
            this.router.navigate(['/userdash']);
          } else {
            console.error("Invalid role");
            alert("Invalid credentials");
          }
        } else {
          console.error("User data or role is missing");
          alert("Login failed, please try again");
        }
      },
      (error) => {
        console.error("Error during login:", error);
        alert("An error occurred, please try again later");
      }
    );
  }
  


  singupdatafun(val:any){
    console.log("Val: ",val);
    this.http.post("/api/register",val).subscribe((response)=>{
      console.log("response: ",response);
    });
    console.log("httpcalled");
  }
  
}
