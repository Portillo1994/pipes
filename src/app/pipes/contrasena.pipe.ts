import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): any {
    const oculto = value.split('');
    if ( !mostrar ) {

      for (const letra in oculto) {
        if (oculto.hasOwnProperty(letra)) {
          oculto[letra] = oculto[letra].replace(/[^0-9]+/g, '*');
        }
      }

    }
    return oculto.join('');
  }

}
