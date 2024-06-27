// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // 假设你已经有一个 AppComponent
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms"; // 假设你已经有一个 LoginComponent
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    RegisterComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
