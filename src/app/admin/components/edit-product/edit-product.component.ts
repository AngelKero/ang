import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductsService } from "./../../../core/services/products/products.service";
import { Product } from "./../../../core/models/product.model";
import { MyValidators } from "./../../../utils/validators";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;

      this.productsService.getProduct(this.id)
      .subscribe(product => {
        if (product) {
          this.form.patchValue(product);
        }else{
          this.router.navigate(['./404']);
        }
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: ['', []],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe(rtd => {
        console.log(rtd);
        this.router.navigate(['./admin/products'])
      });
    }
  }

  
  get priceField() {
    return this.form.get('price');
  }

}
