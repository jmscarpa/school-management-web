import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  public login(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value.email);
    } else {
      alert('Corrija todos os errors antes de continuar');
    }
  }
}
