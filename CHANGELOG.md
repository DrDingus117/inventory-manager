# Inventory Manager

An Angular inventory management application that uses an authenticated REST API to manage products.

## Features

* View inventory products
* Add new products
* Edit existing products
* Delete products
* View product details
* Display product prices
* Navigate between application pages
* Uses an authenticated REST API for product data
* Form validation for new and edited products
* Loading and error messages when working with the API

## Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Tailwind CSS
* REST API
* Angular HttpClient
* Angular Router

## CRUD Operations

The application uses the REST API to perform the four main CRUD operations:

* **Create** — Add a new product
* **Read** — View products and individual product details
* **Update** — Edit an existing product
* **Delete** — Remove a product

## Application Pages

* **Home** — Introduction to the Inventory Manager
* **Inventory List** — Displays the available products
* **Add Product** — Creates a new product
* **Edit Product** — Updates an existing product
* **Product Details** — Displays information about a product
* **Not Found** — Displays when an invalid page is requested

## API

Product information is stored and managed through the REST API rather than only being stored locally in the Angular application.

The application uses an API key to authenticate requests.

The API is used to retrieve, create, update, and delete products.

## Form Validation

The product forms include validation to help prevent invalid submissions.

* Product name is required
* Product name must be at least 3 characters
* Validation messages are displayed when the name is invalid
* The Save button is disabled when the product name is invalid

## Accessibility

The application includes:

* Labels associated with form inputs
* Keyboard-friendly controls
* Visible keyboard focus indicators
* Clear button labels
* Consistent page spacing and layout

## Setup and Running

1. Clone the repository.
2. Open the project folder in a terminal.
3. Install the project dependencies:

```bash
npm install
```

4. Start the Angular development server:

```bash
ng serve
```

5. Open the application in a browser at:

```text
http://localhost:4200
```

The application requires a valid API key for the authenticated REST API.
