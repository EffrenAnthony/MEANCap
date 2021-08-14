import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, Input } from '@angular/core';
import { Product } from '../../types';


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
  constructor() {
    console.log('1- constructor');
  }
  // ngOnChanges(changes: SimpleChanges):void{
  //   console.log('2- ngOnChanges');
  //   console.log(changes)
  // }
  ngOnInit(): void {
    console.log('3- ngOnInit');
  }

  // ngDoCheck():void{
  //   console.log('4- ngDoCheck');

  // }

  // ngOnDestroy():void{
  //   console.log('5. destroy');
  // }
}
