import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { RotuloComponent } from './rotulo.component';
import { MayusculatorPipe } from './mayusculator.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    RotuloComponent,
    MayusculatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
