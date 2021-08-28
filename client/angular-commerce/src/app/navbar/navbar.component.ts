import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  total$!: Observable<number>;
  constructor(
    private cartService: CartService,
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    )

  }

  ngOnInit(): void {
  }

}
