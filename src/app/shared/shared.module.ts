import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ExponencialPipe,
    HightlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponencialPipe,
    HightlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
