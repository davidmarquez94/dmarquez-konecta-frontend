import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { SalesComponentComponent } from './sales-component/sales-component.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'new', component: CreateProductsComponent},
  {path: 'edit/:id', component: EditProductsComponent},
  {path: 'sale', component: SalesComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
