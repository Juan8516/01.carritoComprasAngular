import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  nombreTienda: string = "Mi tienda";
  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = "";

  ngOnInit() {
    this.comprobarNotificacion();
  }

  addProducto() {
    this.cantidadProductos += 1;
    this.totalCarrito += 100000;

    console.log(`Nuevo producto agregado. precio total ${this.totalCarrito} pesos`);
    this.comprobarNotificacion();
  }

  comprobarNotificacion() {

    let limitePrecio = 1000000;

    if(this.totalCarrito > limitePrecio) {

      this.notificacion = `!has llegado al limite de compra ${limitePrecio}`;

    } else {

      this.notificacion = "";

    }
  }
}

