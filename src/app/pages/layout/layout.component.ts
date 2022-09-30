import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public isLoggedIn: boolean = this.authService.isLoggedIn();
  public currentUser: string = this.authService.currentUser;

  public login(): void {
    this.authService.login('joao.scarpa@gmail.com');
    this.isLoggedIn = true;
    this.currentUser = this.authService.currentUser;
    this.router.navigateByUrl('/cursos');
  }

  public logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.currentUser = this.authService.currentUser;
    this.router.navigateByUrl('');
  }
}
