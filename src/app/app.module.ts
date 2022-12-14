import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InicioComponent],
  bootstrap: [AppComponent, InicioComponent],
})
export class AppModule {}
