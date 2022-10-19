import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public isLoggedIn: boolean = this.authService.isLoggedIn();
  public currentUser: LoginModel = this.authService.currentUser;

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
