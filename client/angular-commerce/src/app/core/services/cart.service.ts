import { Injectable } from '@angular/core';
import { Product } from 'src/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable()
  constructor() { }

  addCart(product: Product):any{
    this.products = [...this.products, product]
    this.cart.next(this.products)
  }
}
