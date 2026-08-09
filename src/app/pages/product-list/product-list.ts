import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);

  products: Product[] = [];

  // Tracks whether the API is currently loading products
  isLoading = false;

  // Stores a message when the API request fails
  errorMessage = '';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    console.log('ProductList initialized');

    this.isLoading = true;
    this.errorMessage = '';

    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('SUCCESS', data);

        this.products = data;

        console.log('Products length:', this.products.length);

        this.isLoading = false;

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('ERROR', err);

        this.errorMessage = 'Unable to load products. Please try again.';

        this.isLoading = false;

        this.cdr.detectChanges();
      },
    });
  }

  deleteProduct(id: string): void {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted.');

        // Reload the product list
        this.loadProducts();
      },
      error: (err) => {
        console.error('Delete failed:', err);
      },
    });
  }
}
