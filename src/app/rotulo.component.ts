import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-rotulo',
    template: `<h1>{{texto}}</h1>
               <input #cuadro (input)="cambiado(cuadro.value)" />`
})
export class RotuloComponent {
    @Input() texto = 'NO DEFINIDO';
    @Output() textoChange = new EventEmitter<string>();

    cambiado(texto: string) {
        this.texto = texto;
        this.textoChange.emit(texto);
    }
}