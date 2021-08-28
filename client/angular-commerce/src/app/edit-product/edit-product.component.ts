import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../core/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../types';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:Params) => {
      this.id = params.id
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product.data.body)
      })
    })

  }
  editProduct(event: Event):void{
    event.preventDefault();
    if (this.form.valid) {
      const product:Product = this.form.value
      this.productService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        this.route.navigate(['/home'])
      })
    }
  }


  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

}
