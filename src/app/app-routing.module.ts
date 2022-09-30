import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';

import { AuthGuard } from './guards/auth.guard';
import { CoursesNewComponent } from 'src/app/pages/courses-new/courses-new.component';

// NÃO ESTAR LOGADO:
// meusite.com => HomeComponent

// ESTAR LOGADO:
// meusite.com/dashboard/cursos => CoursesIndexComponent
// meusite.com/dashboard/cursos/:id;detalhes => CoursesShowComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cursos',
        component: CoursesIndexComponent,
      },
      {
        path: 'cursos/novo',
        component: CoursesNewComponent
      },
      {
        path: 'cursos/:id/detalhes',
        component: CoursesShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
