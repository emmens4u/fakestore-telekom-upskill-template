import { Component, effect, inject, OnInit } from '@angular/core';
import { FilterService } from 'src/app/common/services/filter/filter.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Products } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public products: Products[] = [];
  public allProducts: Products[] = [];
  public isLoading = true;
  public query = '';
  private filterService = inject(FilterService);
  private productService = inject(ProductService);
  private router = inject(Router);

  public constructor() {
    effect(() => {
      const filterValue = this.filterService.filter();
      if (filterValue) {
        this.searchProducts(filterValue);
      } else {
        this.products = this.allProducts;
      }
    });
  }

  private loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.isLoading = false;
      this.products = data as Products[];
      this.allProducts = data as Products[];
    });
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  public searchProducts(query: string): void {
    this.products = this.allProducts.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  public onClick(product: Products): void {
    this.router.navigate(['products', product.id]);
  }
}
