import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GuestauthService } from '../services/guestauth-service/guestauth.service';

@Injectable()
export class GuestAuthGuard implements CanActivate {

    base_url: string;

    constructor(
        private router: Router,
        private guestAuthService: GuestauthService) {}

    canActivate() {
        if (this.guestAuthService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }


}