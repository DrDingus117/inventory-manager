import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  private productService = inject(ProductService);
  private router = inject(Router);

  product: Product = {
    name: '',
    data: {
      year: new Date().getFullYear(),
      price: 0,
    },
  };

  isFormValid(): boolean {
    return this.product.name.trim().length >= 3;
  }

  saveProduct(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.productService.createProduct(this.product).subscribe({
      next: (response) => {
        console.log('Product created!', response);
        console.log('Created ID:', response);

        alert('Product created successfully!');

        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Error creating product:', err);
        alert('Failed to create product.');
      },
    });
  }
}
