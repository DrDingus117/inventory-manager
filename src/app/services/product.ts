import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  private apiUrl = 'https://api.restful-api.dev/collections/products/objects';

  private apiKey = 'a571f205-8854-4c42-9950-f6a1475e5b01';

  private headers = new HttpHeaders({
    'x-api-key': this.apiKey,
    'Content-Type': 'application/json',
  });

  // READ ALL
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, {
      headers: this.headers,
    });
  }

  // READ ONE
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`, {
      headers: this.headers,
    });
  }

  // CREATE
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, {
      headers: this.headers,
    });
  }

  // UPDATE
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product, {
      headers: this.headers,
    });
  }

  // DELETE
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.headers,
    });
  }
}
