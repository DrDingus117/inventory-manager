import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  product: Product | null = null;
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('Product ID from URL:', id);

    if (!id) {
      this.isLoading = false;
      this.errorMessage = 'No product ID was found in the URL.';
      this.cdr.detectChanges();
      return;
    }

    this.productService.getProductById(id).subscribe({
      next: (data) => {
        console.log('Product loaded:', data);

        this.product = data;
        this.isLoading = false;

        // Force Angular to update the page
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error loading product:', error);

        this.product = null;
        this.isLoading = false;
        this.errorMessage = 'Unable to load this product.';

        // Force Angular to update the page
        this.cdr.detectChanges();
      },
    });
  }
}
