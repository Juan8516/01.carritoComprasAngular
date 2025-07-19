import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = "";

  ngOnInit() {
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

