import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  public login(): void {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigateByUrl('/cursos');
  }

  public logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('');
  }
}
