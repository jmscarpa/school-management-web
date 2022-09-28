import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';

import { CourseComponent } from './components/course/course.component';
import { LayoutComponent } from 'src/app/pages/layout/layout.component';

import { UpcasePipe } from './pipes/upcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesIndexComponent,
    CourseComponent,
    CoursesShowComponent,
    LayoutComponent,
    UpcasePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
