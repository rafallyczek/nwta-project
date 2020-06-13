import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminauthService } from '../services/adminauth-service/adminauth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    base_url: string;

    constructor(
        private router: Router,
        private adminAuthService: AdminauthService) {}

    canActivate() {
        if (this.adminAuthService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }


}