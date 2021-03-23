import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fetchProduct();
    });
  }

  fetchProduct() {
    this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '55',
      image: 'assets/images/stickers2.png',
      title: 'Camisa',
      price: 344400,
      description: 'SKNjhgdvjhdkjkl'
    };

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: 'assets/images/stickers2.png',
      title: 'Camisa',
    };

    this.productsService.updateProduct('4', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('1')
    .subscribe(response => {
      console.log(response);
    });
  }

}
