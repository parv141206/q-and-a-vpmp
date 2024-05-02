import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P11q1Component } from './p11/p11q1/p11q1.component';
import { P11q2Component } from './p11/p11q2/p11q2.component';
import { P12q1Component } from './p12/p12q1/p12q1.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { P12q2Component } from './p12/p12q2/p12q2.component';
import { P13q1Component } from './p13/p13q1/p13q1.component';
import { HttpClientModule } from '@angular/common/http';
import { P14q1Component } from './p14/p14q1/p14q1.component';

@NgModule({
  declarations: [
    AppComponent,
    P11q1Component,
    P11q2Component,
    P12q1Component,
    P12q2Component,
    P13q1Component,
    P14q1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
