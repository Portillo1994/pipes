import { Component } from '@angular/core';
import { resolve } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Jorge';

  nombre2 = 'jorge guillerMo portiLLo ruiz';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 9, 10];

  pi = Math.PI;

  a = 0.234;

  salario = 89.6;

  fecha = new Date();

  jugador = {
    nombre: 'Ronaldinho',
    numero: '10',
    edad: 40,
    equipo: {
      nombre: 'Barcelona',
      nacion: 'España',
      estadio: 'Camp Nou'
    }
  };

  valorDePromesa = new Promise( ( resolv, reject) => {

    setTimeout( () => resolv('Se acabo el tiempo bob esponja'), 3500 );
  } );
}

