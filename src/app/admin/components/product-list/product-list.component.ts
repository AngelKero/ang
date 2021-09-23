import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rp => {
      if (rp) {
        this.products = this.products.filter(product => product.id !== id);
      }
    });
  }

}
