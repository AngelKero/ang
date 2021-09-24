import { TestBed } from '@angular/core/testing';
import { ProductsService } from '@core/services/products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: ProductsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ProductsService);
    });

    it('should be create', () => {
        expect(service).toBeTruthy();
    });

    describe('test for getAllProducts', () => {
        it('Should return array of products', () => {
            // * Arrange
            const expectData = [
                {
                    id: '1',
                    title: 'Nombre',
                    image: 'assets/images/stickers2.png',
                    price: 1234,
                    description: 'lorem ipsum',
                },
                {
                    id: '2',
                    title: 'Nombre 2',
                    image: 'assets/images/stickers1.png',
                    price: 1234,
                    description: 'lorem ipsum',
                }
            ];

            // * Act
            let dataError: any;
            let dataResponse: any;
            service.getAllProducts().subscribe(
                response => dataResponse = response,
                error => dataError = error
            );
            const req = httpTestingController.expectOne(`${environment.url_api}/products/`);
            req.flush(expectData);

            // * Assert
            expect(dataResponse).toBeTruthy();
            expect(dataResponse.length).toEqual(2);
            expect(req.request.method).toEqual('GET');
            expect(dataError).toBeUndefined();
        });
    });
});
