import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.html',
  styleUrl: './carrito-signals.css'
})
export class CarritoSignals {

  contador = signal(0);

  aumentar() {

    this.contador.set(this.contador() + 1);

  }

}
