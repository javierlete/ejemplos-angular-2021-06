import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculator'
})
export class MayusculatorPipe implements PipeTransform {

  transform(texto: string, ...args: any[]): string {
    texto = texto[0].toUpperCase() + texto.substring(1);
    if(args[0]) {
      texto = args[0] + texto;
    }
    if(args[1]) {
      texto = texto + args[1];
    }
    return texto;
  }

}
