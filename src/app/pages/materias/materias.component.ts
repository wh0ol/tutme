import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Añadido MatDialogModule
import { MatExpansionModule } from '@angular/material/expansion';
import { SolicitudTutoriaComponent } from '../../components/solicitud-tutoria/solicitud-tutoria.component';

interface Materia {
  id: string;
  nombre: string;
  descripcion: string; 
  visitas?: number;
  rating?: number;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatDialogModule
],
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: Materia[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.http.get<Materia[]>('https://67e1c0ec58cc6bf78526fc41.mockapi.io/materias/materias')
      .subscribe({
        next: (data) => {
          this.materias = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Error al cargar las materias';
          this.isLoading = false;
          console.error(err);
        }
      });
  }

  solicitarTutoria(materia: Materia): void {
    this.dialog.open(SolicitudTutoriaComponent, {
      width: '90%',
      maxWidth: '400px',
      data: { 
        materia: materia.nombre,
        id: materia.id, // Envía más datos si los necesitas
        descripcion: materia.descripcion 
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result?.email) {
        console.log('Solicitud recibida para:', materia.nombre, 'Email:', result.email);
        // Aquí podrías llamar a un servicio para guardar la solicitud
      }
    });
  }
}