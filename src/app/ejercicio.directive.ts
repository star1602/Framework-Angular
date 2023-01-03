import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEjercicio]'
})

export class EjercicioDirective {
  constructor( private elRef: ElementRef) {}
  saludo = 'hola';
}
