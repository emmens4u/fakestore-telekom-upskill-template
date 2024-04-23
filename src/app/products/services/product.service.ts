import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private appUrl = environment.appUrl;

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
