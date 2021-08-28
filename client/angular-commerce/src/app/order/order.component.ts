import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$!: Observable<Product[]>;
  total: number = 0;
  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$
    this.getTotal()
  }

  ngOnInit(): void {
  }
  getTotal(): void {
    this.products$.subscribe(products => {
      this.total = products.reduce((prev, curr):any=> {
        return prev + curr.price
      },0)
    })
  }
}
