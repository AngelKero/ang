import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './components/demo/demo.component';


@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        DemoRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class DemoModule { }
