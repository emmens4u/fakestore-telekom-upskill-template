import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, CartItem } from 'src/app/common/models/user.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public products: Product | null = null;
  private cartItems: CartItem[] = [];
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.getSingleProduct(productId).subscribe((data) => {
        this.products = data as Product;
      });
    });
  }
  public addToCart(): void {
    if (this.products) {
      const product = this.products;
      const existingItemIndex = this.cartItems.findIndex(
        (item) => item.productId === product.id
      );
      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += 1;
      } else {
        const cartItem: CartItem = {
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          total: product.price * product.quantity,
        };
        this.cartItems.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.router.navigate(['/carts']);
      }
    }
  }
}
