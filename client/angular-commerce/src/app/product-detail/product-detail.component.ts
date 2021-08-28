import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/types';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.getProduct(id)
    })
  }

  getProduct(id: string): void {
    this.productService.getProduct(id)
    .subscribe((product: any) => {
      this.product = product.data.body
    })
  }
}
