import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public get<T>(path: string): Promise<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}${path}`, this.getOptions()).toPromise()
  }
  
  public post<T>(path: string, body: object = {}): Promise<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}${path}`, body, this.getOptions()).toPromise()
  }
  
  public delete<T>(path: string): Promise<T> {
    return this.httpClient.delete<T>(`${environment.apiUrl}${path}`, this.getOptions()).toPromise()
  }

  private getOptions(): object {
    const headers: object = {
      'Content-Type': 'application/json',
      'Authorization': ''
    };
    
    if (this.authService.isLoggedIn()) {
      headers['Authorization'] = this.authService.currentUser.api_token
    }

    return {
      headers,
    }
  }
}
