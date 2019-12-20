import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (localStorage.getItem('participant') != null) {
            return true;
        }
        this.router.navigate(['/register']);
        return false;
    }
}
