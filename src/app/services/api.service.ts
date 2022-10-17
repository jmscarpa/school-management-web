import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(path: string): Promise<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}${path}`).toPromise()
  }
  
  public post<T>(path: string, body: object = {}): Promise<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}${path}`, body).toPromise()
  }
  
  public delete<T>(path: string): Promise<T> {
    return this.httpClient.delete<T>(`${environment.apiUrl}${path}`).toPromise()
  }

}
