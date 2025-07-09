import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  request<T>(method: string, endpoint: string, data?: any) {
    const url = `${this.baseUrl}/${endpoint}`;

    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get<T>(url);
      case 'POST':
        return this.http.post<T>(url, data);
      case 'PUT':
        return this.http.put<T>(url, data);
      case 'DELETE':
        return this.http.delete<T>(url);
      default:
        throw new Error(`Methode HTTP non supporter: ${method}`);
    }
  }
}
