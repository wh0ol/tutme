import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './solicitud-tutoria.component.html',
  styleUrls: ['./solicitud-tutoria.component.css']
})
export class SolicitudTutoriaComponent {
closeForm() {
throw new Error('Method not implemented.');
}
  email: string = '';
  isSending = false;
materiaSeleccionada: any;

  constructor(
    public dialogRef: MatDialogRef<SolicitudTutoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { materia: string }
  ) {
    // Inicialización CORRECTA con tu User ID real
    emailjs.init('4ibJdWLG2rf0dmkRd'); // User ID que me confirmaste
  }

  async onSubmit() {
    if (!this.email) return;

    this.isSending = true;
    try {
      const solicitudId = 'TUT-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      
      const templateParams = {
        to_email: this.email,
        materia: this.data.materia,
        fecha: new Date().toLocaleDateString('es-ES', { 
          weekday: 'long', 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        solicitud_id: solicitudId,
        year: new Date().getFullYear()
      };

      // Envío con tus credenciales REALES
      const response = await emailjs.send(
        'service_53t7971',     // Service ID que me indicaste
        'template_2ie8zna',    // Template ID (Auto-Reply)
        templateParams,
        '4ibJdWLG2rf0dmkRd'    // User ID que me confirmaste
      );

      console.log('✅ Correo enviado!', {
        status: response.status,
        text: response.text,
        email: this.email,
        id: solicitudId
      });

      this.dialogRef.close({ success: true });
      
    } catch (error) {
      console.error('❌ Error completo:', {
        status: (error as EmailJSResponseStatus).status,
        text: (error as EmailJSResponseStatus).text,
        error: error
      });
      
      this.dialogRef.close({ 
        success: false,
        error: 'No se pudo enviar la confirmación'
      });
    } finally {
      this.isSending = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}