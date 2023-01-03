import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'class9';

  valor1 = '';
  valor2 = '';
  mensaje = 0;
  validacion = false;

  optionSelect = '';

  alerta = 'No eligió operación';

// Ejercicios

  sumar() {
    this.validacion = true;
    this.mensaje = parseInt(this.valor1) + parseInt(this.valor2);
  }

  restar() {
    this.validacion = true;
    this.mensaje = parseInt(this.valor1) - parseInt(this.valor2);
  }

  dividir() {
    this.validacion = true;
    this.mensaje = parseInt(this.valor1) / parseInt(this.valor2);
  }

  multiplicar() {
    this.validacion = true;
    this.mensaje = parseInt(this.valor1) * parseInt(this.valor2);
  }
}