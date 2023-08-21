import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable()
export class AuthGuard  {

    base_url: string;

    constructor(
        private router: Router,
        private authService: AuthService) {}

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }


}