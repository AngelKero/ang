import { retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/core/models/product.model';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


interface User{
    gender: 'male' | 'female';
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    cell: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(
        private http: HttpClient
    ) { }

    getAllProducts() {
        return this.http.get<Product[]>(`${environment.url_api}/products/`)
        .pipe(
            catchError(e => throwError(e)),
        );
    }

    getProduct(id: string) {
        return this.http.get<Product>(`${environment.url_api}/products/${id}`)
        .pipe(
            catchError(e => throwError(e)),
        );
    }

    createProduct(product: Product) {
        return this.http.post<Product>(`${environment.url_api}/products`, product)
        .pipe(
            catchError(e => throwError(e)),
        );
    }

    updateProduct(id: string, changes: Partial<Product>) {
        return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes)
        .pipe(
            catchError(e => throwError(e)),
        );
    }

    deleteProduct(id: string) {
        return this.http.delete<boolean>(`${environment.url_api}/products/${id}`)
        .pipe(
            catchError(e => throwError(e)),
        );
    }

    getRamdomUsers(): Observable<User[]> {
        return this.http.get(`https://randomuser32432.me/api/?results=2`)
        .pipe(
            catchError(e => throwError(new Error('Algo salio mal'))),
            map((response: any) => response.results as User[])
        );
    }

    getFile() {
        return this.http.get(`assets/files/test.txt`, {responseType: 'text'});
    }

}
