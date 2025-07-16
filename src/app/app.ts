import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carrito } from './components/carrito/carrito';

@Component({
  selector: 'app-root',
  imports: [Carrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '01.carritoCompras';
}
