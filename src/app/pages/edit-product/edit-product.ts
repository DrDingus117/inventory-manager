import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  productId = '';

  product: Product = {
    name: '',
    data: {
      year: new Date().getFullYear(),
      price: 0,
    },
  };

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') ?? '';

    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe({
        next: (data) => {
          console.log('Loaded product:', data);

          this.product = data;

          // Ensure data exists
          if (!this.product.data) {
            this.product.data = {
              year: new Date().getFullYear(),
              price: 0,
            };
          }

          // Force Angular to refresh the form
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Failed to load product:', err);
          alert('Unable to load product.');
          this.router.navigate(['/products']);
        },
      });
    }
  }

  saveChanges(): void {
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe({
        next: (response) => {
          console.log('Updated product:', response);
          alert('Product updated successfully!');
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Failed to update product.');
        },
      });
  }
}
