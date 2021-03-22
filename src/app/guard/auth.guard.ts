import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../login-form/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
      ) {}
    
      canActivate(): boolean {
    
        if (!this.auth.isUserLoggedIn()) {

            this.router.navigateByUrl('/login')

            return false;
      
        }
    
        return true;
      }



}