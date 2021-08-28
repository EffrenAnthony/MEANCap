import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../types';
import { CartService } from '../core/services/cart.service';
import { ProductService } from '../core/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
// DoCheck
//  OnChanges
// OnDestroy
  {
  @Input() product!: Product;
  @Output() productDeleted: EventEmitter<any> = new EventEmitter();
  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {
    console.log('1- constructor');
  }
  // ngOnChanges(changes: SimpleChanges):void{
  //   console.log('2- ngOnChanges');
  //   console.log(changes)
  // }
  ngOnInit(): void {
    console.log('3- ngOnInit');
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product._id)
    .subscribe(res => {
      console.log(res)
      this.productDeleted.emit(this.product._id)
    })
  }
  // ngDoCheck():void{
  //   console.log('4- ngDoCheck');

  // }

  // ngOnDestroy():void{
  //   console.log('5. destroy');
  // }

  addCart():void{
    this.cartService.addCart(this.product);
  }
}
