import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private appUrl = 'https://fakestoreapi.com';

  private http = inject(HttpClient);

  public getAllProducts(): Observable<unknown> {
    return this.http.get(`${this.appUrl}/products`);
  }

  public searchProducts(query: string): Observable<unknown> {
    return this.http.get(`${this.appUrl}/products?q=${query}`);
  }

  public getSingleProduct(id: number): Observable<unknown> {
    return this.http.get(`${this.appUrl}/products/${id}`);
  }
}
