import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../products/services/product.service';
import { CartItem } from '../common/models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartItems: CartItem[] = [];

  public ngOnInit(): void {
    const storedCart = localStorage.getItem('cartItems');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }
}
