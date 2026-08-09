import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { CreateProduct } from './pages/create-product/create-product';
import { EditProduct } from './pages/edit-product/edit-product';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList },
  { path: 'products/new', component: CreateProduct },
  { path: 'products/:id', component: ProductDetails },
  { path: 'products/edit/:id', component: EditProduct },
  { path: 'login', component: Login },
  { path: '**', component: NotFound }
];
