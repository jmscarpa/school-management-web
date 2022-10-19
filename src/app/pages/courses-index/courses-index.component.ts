import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
})
export class CoursesIndexComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  public courses: CourseModel[] = [];
  public loading: boolean = true;

  ngOnInit(): void {
    this.loadCourses();
  }

  public loadCourses(): void { 
    this.loading = true;
    this.apiService.get<CourseModel[]>('courses').then( data => {
      this.courses = data;
    }).catch( response => {
      alert(response.error.error)
    }).finally( () => {
      this.loading = false;
    })
  }

}
