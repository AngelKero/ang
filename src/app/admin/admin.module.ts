import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { DashComponent } from './components/dash/dash.component';
import { TreeComponent } from './components/tree/tree.component';

import { ElementsComponent } from './components/elements/elements.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashComponent,
    TreeComponent,
    ElementsComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    DragDropModule
  ]
})
export class AdminModule { }
