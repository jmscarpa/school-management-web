import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../models/course.model';

import { dataset } from '../../data/courses';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
})
export class CoursesIndexComponent implements OnInit {
  
  constructor(private httpClient: HttpClient){}
  
  public courses: CourseModel[] = [];

  ngOnInit(): void {
    const url: string = "https://jp-courses-api.herokuapp.com/courses"
    
    this.httpClient.get<CourseModel[]>(url).subscribe( data => {
       this.courses = data;
    })

  }


}
