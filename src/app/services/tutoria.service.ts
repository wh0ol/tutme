import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutoriaService {
  private apiUrl = 'https://67e1c0ec58cc6bf78526fc41.mockapi.io/materias/tutorias';

  constructor(private http: HttpClient) {}

  solicitarTutoria(solicitud: any) {
    return this.http.post(this.apiUrl, solicitud);
  }

  getSolicitudes() {
    return this.http.get<any[]>(this.apiUrl);
  }
}