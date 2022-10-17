import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface SuccessModel {}

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss'],
})
export class CoursesNewComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    active: new FormControl(true, [Validators.required]),
  });

  public save(): void {
    this.apiService.post<SuccessModel>('courses', this.form.value).then((_) => {
      this.router.navigateByUrl('/dashboard/cursos');
    }).catch((response) => {
      alert(response.error.error);
    });
  }
}
