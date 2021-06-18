import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashComponent } from './components/dash/dash.component';
import { TreeComponent } from './components/tree/tree.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dash',
        component: DashComponent
      },
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'elements',
        component: ElementsComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'edit',
        redirectTo: '/admin',
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
