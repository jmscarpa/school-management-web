import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public email: string = '';
  public selectedColor: string = '';
  public colors: string[] = ['red', 'blue', 'black'];

  public login(): void {
    alert(this.email);
  }
}
