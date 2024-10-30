import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const ApiUrl = environment.ApiUrl;
const endpoint = 'users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<any> {
    return this.httpClient.get<[]>(`${ApiUrl}${endpoint}?page=3`).pipe();
  }

  create(form: any): Observable<any> {
    return this.httpClient.post<[]>(`${ApiUrl}${endpoint}`, form).pipe();
  }
}
