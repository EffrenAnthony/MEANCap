import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../../types';
environment
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts():Observable<any> {
    return this.http.get<Product[]>(`${environment.url_api}/products`)
  }

  getProduct(id:string):Observable<any> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`)
  }

  createProduct(product:Product):Observable<any>{
    return this.http.post<Product>(`${environment.url_api}/products/`,product)
  }

  updateProduct(id:string, product:Partial<Product>):Observable<any>{
    return this.http.patch<Product>(`${environment.url_api}/products/${id}`,product)
  }
  deleteProduct(id:number):Observable<any> {
    return this.http.delete<Product>(`${environment.url_api}/products/${id}`)
  }
}
