import { Component } from "@angular/core";

@Component({
    selector: 'app-titulo',
    template: `<h1>{{titulo | titlecase}}</h1>
               <img src="{{url}}" alt=""/>
               <img [src]="url" alt=""/>
               <input disabled="{{disabled}}" />
               <input [disabled]="disabled" />
               <input [attr.disabled]="disabled ? 'disabled' : null" />
               <p>
                   {{ numero | currency:'EUR':'symbol-narrow':'1.2-2':'es' }}
                   {{ numero | number:'1.2-2':'es' }}
                   {{ tantoPorUno | percent:'0.0-0':'es' }}
                </p>
                <p>
                    {{ fecha | date:'yyyy-MM-dd HH:mm:ss' }}
                </p>
                <pre>{{objeto|json}}</pre>
                <pre>{{objeto.gustos|slice:1:3|json}}</pre>
                <p *ngFor="let dato of persona|keyvalue">
                    <label for="{{dato.key}}">{{dato.key}}</label>
                    <input id="{{dato.key}}" value="{{dato.value}}" />
                </p>
                <p>
                    {{0|i18nPlural:mapeadoPlurales}}
                    {{1|i18nPlural:mapeadoPlurales}}
                    {{2|i18nPlural:mapeadoPlurales}}
                    {{3|i18nPlural:mapeadoPlurales}}
                </p>
                <p>
                    {{'male'|i18nSelect:inviteMap}}
                    {{'female'|i18nSelect:inviteMap}}
                    {{'robot'|i18nSelect:inviteMap}}
                </p>
                `,
    styles: [ `
        h1 {
            font-family: sans-serif;
        }
    ` ]
})
export class TituloComponent {
    titulo = 'Título desde el componente';
    url = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
    disabled = false;
    numero = 12.345;
    tantoPorUno = 0.2678;
    fecha = new Date();
    objeto = {
        id: 1,
        nombreCompleto: { nombre: 'Javier', apellido: 'Lete' },
        gustos: [
            'Informática', 'Música', 'Java', '.NET', 'Linux'
        ]
    };
    persona = {
        id: 1,
        nombre: 'Javier',
        apellido: 'Lete'
    };
    mapeadoPlurales: {[k: string]: string} = {'=0': 'No hay mensajes.', '=1': 'Un mensaje.', 'other': '# mensajes.'};
    inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
}
