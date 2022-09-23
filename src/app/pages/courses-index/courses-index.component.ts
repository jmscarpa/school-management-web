import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';

import { dataset } from '../../data/courses';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
})
export class CoursesIndexComponent {
  public courses: CourseModel[] = dataset;
}
