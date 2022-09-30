import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean {
    let hasAccess: boolean = this.authService.isLoggedIn();
    if (hasAccess) {
      return true;
    } else {
      alert('Você não tem permissão');
      return false;
    }
  }
}
