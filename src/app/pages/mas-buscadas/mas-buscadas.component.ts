import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Módulos de Angular Material:
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // <-- Añade esto

@Component({
  selector: 'app-mas-buscadas',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './mas-buscadas.component.html',
  styleUrls: ['./mas-buscadas.component.css']
})
export class MasBuscadasComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
top5Materias: any;
  // ... (resto del código)
}