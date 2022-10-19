import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService, private apiService: ApiService) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  public login(): void {
    if (this.form.valid) {
      this.apiService.post<LoginModel>('sessions', this.form.value).then( data => {
        this.authService.login(data);
      }).catch( response => {
        alert(response.error.error)
      })
    } else {
      alert('Corrija todos os errors antes de continuar');
    }
  }
}
