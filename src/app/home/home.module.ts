import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class HomeModule { }
