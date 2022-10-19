import { CourseModel } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface SuccessModel {}
@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
})
export class CoursesShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  public id: number = this.route.snapshot.params.id;
  public course!: CourseModel;
  public path: string = `/courses/${this.id}`;
  public loading: boolean = true;

  public async ngOnInit(): Promise<void> {
    this.loading = true;
    this.course = await this.apiService.get<CourseModel>(this.path);
    this.loading = false;
  }

  public delete(): void {
    if (window.confirm('Deseja remover? ')) {
      this.apiService.delete<SuccessModel>(this.path)
      .then( _ => {
        // Se a a API retornar status 200..299
        this.router.navigateByUrl('/dashboard/cursos');
      }).catch( response => {
        alert(response.error.error)
        // Se a API retornar status 400..599
      }).finally( () => {
        // Tanto faz o que a API responder
      });
    }
  }
}
