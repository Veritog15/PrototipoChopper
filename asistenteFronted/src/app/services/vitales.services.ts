import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VitalesService {
  private apiUrl = 'http://localhost:3000/api/vitales';

  constructor(private http: HttpClient) {}

  obtenerRegistros(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
