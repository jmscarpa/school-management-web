import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn(): boolean {
    return !!localStorage.user;
  }

  public currentUser(): string {
    return localStorage.user;
  }

  public login(email: string): void {
    localStorage.setItem('user', email);
  }

  public logout(): void {
    localStorage.clear();
  }
}
