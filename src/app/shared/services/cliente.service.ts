import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8090/cliente';  

  constructor(private http: HttpClient) { }

  getClienteInfo(tipoDocumento: string, numeroDocumento: string): Observable<Persona> {
    let params = new HttpParams()
      .set('tipoDocumento', tipoDocumento)
      .set('numeroDocumento', numeroDocumento);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
