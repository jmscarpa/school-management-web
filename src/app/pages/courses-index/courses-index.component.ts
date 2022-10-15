import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
})
export class CoursesIndexComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  public courses: CourseModel[] = [];

  ngOnInit(): void {
    this.loadCourses();
  }

  public loadCourses(): void {
    const url: string = `${environment.apiUrl}/courses`;

    this.httpClient
      .get<CourseModel[]>(url)
      .toPromise()
      .then((data) => {
        this.courses = data;
      });
  }
}
