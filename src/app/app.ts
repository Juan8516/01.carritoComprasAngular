import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carrito } from './components/carrito/carrito';
import { CarritoSignals } from './components/carrito-signals/carrito-signals';

@Component({
  selector: 'app-root',
  imports: [CarritoSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '01.carritoCompras';
}
