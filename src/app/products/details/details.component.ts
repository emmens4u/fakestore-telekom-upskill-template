import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/models/user.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public products: Product | null = null;
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.getSingleProduct(productId).subscribe((data) => {
        this.products = data as Product;
      });
    });
  }
}
