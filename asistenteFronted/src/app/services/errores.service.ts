import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErroresService {
  private apiUrl = 'http://localhost:3000/api/error';

  constructor(private http: HttpClient) {}

  obtenerErrores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
