import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { element } from 'protractor';

@Pipe({
  name: 'cartrepeat'
})
export class CartrepeatPipe implements PipeTransform {

    products: Product[];

    constructor(private cartService: CartService) {
    }

    transform(product: Product): number {
        let total = 0;
        this.cartService.cart$.subscribe(products => {
        products.forEach(element => {
            if(element.id === product.id) {
            total++;
            }
        });
        });
        return total;
    }

}
