import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // Retornar se o usuário está logado
  public isLoggedIn(): boolean {
    return !!localStorage.user;
  }
  
  // Retornar qual usuário está logado
  public get currentUser(): string {
    return localStorage.user;
  }

  // Realizar o login do usuário
  // armazendo o e-mail informado no localStorage
  public login(email: string): void {
    if (email) {
      localStorage.setItem('user', email);
      this.router.navigateByUrl('/dashboard/cursos');
    }
  }

  // Realiza o logout, limpando o localStorage
  public logout(): void {
    localStorage.clear();
  }
}
