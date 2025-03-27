import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tutoria-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Necesario para formGroup
    MatFormFieldModule,  // Necesario para mat-form-field
    MatInputModule       // Necesario para mat-label, mat-error
  ],
  templateUrl: './tutoria-form.component.html',
  styleUrls: ['./tutoria-form.component.css']
})
export class TutoriaFormComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  form = new FormGroup({
    // Define tus controles aquí
    ejemplo: new FormControl('')
  });
  tutoriaForm!: FormGroup<any>;
}