import { CourseModel } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataset } from '../../data/courses';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
})
export class CoursesShowComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  public id: number = this.route.snapshot.params.id;
  public course!: CourseModel;

   ngOnInit(): void {
    const url: string = `https://jp-courses-api.herokuapp.com/courses/${this.id}`
    
    this.httpClient.get<CourseModel>(url).subscribe( data => {
      this.course = data;
    })

  }
}
