import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
        if (userInfo) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
