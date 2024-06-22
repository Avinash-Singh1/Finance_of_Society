import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const session = this.dataService.getcookieValue(); // Assuming DataService has a getSession method
    let flag:boolean=false;
    if(session){
flag =true;
console.log("session",session);
    }
    const protectedRoutes: string[] = ['/dashboard', '/register'];

    if (protectedRoutes.includes(state.url) && !flag) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
