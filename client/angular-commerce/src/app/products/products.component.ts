import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/types';
import { ProductService } from '../core/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  subscriptionProducts: Subscription | undefined
  constructor(
    private productsService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.subscriptionProducts = this.productsService.getAllProducts()
    .subscribe((products:any) => {
      console.log(products)
      this.products = products.data.body
    })
  }
}
