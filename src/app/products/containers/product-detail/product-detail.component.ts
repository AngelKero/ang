import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';

import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as FileSaver from 'file-saver';


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    id: string;
    product$: Observable<Product>;

    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.product$ = this.route.params.pipe(
            switchMap((params: Params) => this.productsService.getProduct(params.id)),
            tap(product => console.log(product))
        );
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

    getRamdomUsers() {
        this.productsService.getRamdomUsers()
        .subscribe(
            users => {
                console.log(users);
            },
            error => {
                console.error(error);
            }
        );
    }

    getFile() {
        this.productsService.getFile()
        .subscribe(content => {
            var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
            FileSaver.saveAs(blob, 'archivo.txt');
        });
    }

}
