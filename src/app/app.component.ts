import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tu aplicación de tutorías';
  isSidebarOpen = true; // Nuevo: Control de visibilidad

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}