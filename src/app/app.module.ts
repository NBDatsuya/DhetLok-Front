// src/app/app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    RegisterComponent,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
})
export class AppModule {
}
