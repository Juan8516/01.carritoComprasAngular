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
  incremento = signal(1);

  aumentar() {

    //this.contador.set(this.contador() + 1);
    this.contador.update(contadorActual => contadorActual + this.incremento());

  }

  ngOnInit() {
    console.log("La aplicacion ha cargado");
  }

  ngDoCheck() {
    console.log("Se ha detectado un cambio en el componente");
  }

}
