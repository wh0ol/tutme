import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Materia {
  id: string;
  nombre: string;
  visitas: number;
  imagen?: string;
  descripcion?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  materias: Materia[] = [];
  isLoading = true;
  defaultImage = 'assets/images/default-subject.jpg'; // Asegúrate de tener esta imagen

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMaterias();
  }

  fetchMaterias(): void {
    this.http.get<Materia[]>('https://67e1c0ec58cc6bf78526fc41.mockapi.io/materias/materias')
      .subscribe({
        next: (data) => {
          // Ordenar por visitas y tomar las 3 primeras
          this.materias = data.sort((a, b) => b.visitas - a.visitas).slice(0, 3);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching materias:', err);
          this.isLoading = false;
        }
      });
  }
}