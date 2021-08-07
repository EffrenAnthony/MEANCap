import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

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
