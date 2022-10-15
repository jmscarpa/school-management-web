import { CourseModel } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

interface SuccessModel {}
@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
})
export class CoursesShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  public id: number = this.route.snapshot.params.id;
  public course!: CourseModel;
  public url: string = `${environment.apiUrl}/courses/${this.id}`;

  ngOnInit(): void {
    this.httpClient
      .get<CourseModel>(this.url)
      .toPromise()
      .then((data) => {
        this.course = data;
      });
  }

  public delete(): void {
    if (window.confirm('Deseja remover? ')) {
      this.httpClient
        .delete<SuccessModel>(this.url)
        .toPromise()
        .then((_) => {
          this.router.navigateByUrl('/dashboard/cursos');
        });
    }
  }
}
