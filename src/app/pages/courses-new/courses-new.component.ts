import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';

import { Router } from '@angular/router';

interface SuccessModel {}

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss'],
})
export class CoursesNewComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    active: new FormControl(true, [Validators.required]),
  });

  public save(): void {
    const url: string = `${environment.apiUrl}/courses/`;

    this.httpClient
      .post<SuccessModel>(url, this.form.value)
      .toPromise()
      .then((_) => {
        this.router.navigateByUrl('/dashboard/cursos');
      })
      .catch((response) => {
        alert(response.error.error);
      });
  }
}
