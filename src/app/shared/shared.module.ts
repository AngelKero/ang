import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartrepeatPipe } from './pipes/cartrepeat/cartrepeat.pipe';
import { DeleteRepeatPipe } from './pipes/deleteRepeat/delete-repeat.pipe';

@NgModule({
  declarations: [
    ExponencialPipe,
    HightlightDirective,
    HeaderComponent,
    FooterComponent,
    CartrepeatPipe,
    DeleteRepeatPipe
  ],
  exports: [
    ExponencialPipe,
    CartrepeatPipe,
    HightlightDirective,
    HeaderComponent,
    FooterComponent,
    DeleteRepeatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
