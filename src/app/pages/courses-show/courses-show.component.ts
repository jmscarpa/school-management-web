import { CourseModel } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataset } from '../../data/courses';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
})
export class CoursesShowComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public id: number = this.route.snapshot.params.id;
  public course!: CourseModel;

  public ngOnInit(): void {
    this.course = dataset.filter((item: CourseModel) => {
      return item.id == this.id;
    })[0];
  }
}
