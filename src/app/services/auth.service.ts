import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';

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
  public get currentUser(): LoginModel {
    return JSON.parse(localStorage.user);
  }

  // Realizar o login do usuário
  // armazendo o e-mail informado no localStorage
  public login(login: LoginModel): void {
    if (login) {
      localStorage.setItem('user', JSON.stringify(login));
      this.router.navigateByUrl('/dashboard/cursos');
    }
  }

  // Realiza o logout, limpando o localStorage
  public logout(): void {
    localStorage.clear();
  }
}
