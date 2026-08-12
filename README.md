# Inventory Manager

An Angular inventory management application that uses an authenticated REST API to manage products.

## Features

- View inventory products
- Add new products
- Edit existing products
- Delete products
- View individual product details
- Display product prices
- Login page
- Form validation
- Loading and error messages
- Navigation between application pages
- Responsive styling with Tailwind CSS
- Dark-themed interface
- Deployed with GitHub Pages

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- Tailwind CSS
- Angular HttpClient
- Angular Router
- REST API
- GitHub Pages

## CRUD Operations

The application uses the REST API for the four main CRUD operations:

- **Create** — Add a new product
- **Read** — View the inventory and individual product details
- **Update** — Edit an existing product
- **Delete** — Remove a product

## Application Pages

- **Home** — Introduction and navigation for the application
- **Inventory List** — Displays available products and their prices
- **Add Product** — Creates a new product
- **Edit Product** — Updates an existing product
- **Product Details** — Displays information about an individual product
- **Login** — Provides a simple login screen
- **Not Found** — Displays when an invalid page is requested

## API

Product information is stored and managed through the REST API instead of only being stored locally in the Angular application.

The application uses an API key to authenticate requests.

## Validation and Error Handling

The application includes basic validation for product forms, including checking required product information and preventing invalid product names.

The application also provides loading and error messages when working with API requests.

## Styling

Tailwind CSS is used throughout the application for layout, spacing, buttons, tables, and other interface elements.

The application uses a simple dark theme with a gray header and contrasting form fields and table headings.

## Accessibility

The application includes:

- Labels associated with form inputs
- Keyboard-friendly controls
- Visible focus indicators
- Clear button labels
- Consistent spacing and layout
- Loading messages announced with `aria-live`

## Deployment

The application is deployed using GitHub Pages.

**Live Application:**  
https://drdingus117.github.io/inventory-manager/

## Project Repo

https://github.com/DrDingus117/inventory-manager

## How it runs

I didn't use the local version, but a live version

Just click the deployment tab, and then the recent green checkmark to see the site.
