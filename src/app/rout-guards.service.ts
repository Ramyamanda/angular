import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardsService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
     let loggedIn = true;
     if(loggedIn){
      return true;
     }
     else{
      this.router.navigate(['/routing']);
      return false;
     }
    
  }
}
