# Dell Inventory Management System

## Problem Statement

This project is a functional inventory management system for a Dell e-commerce application. It uses a JavaScript array to manage Dell product names and allows users to display, add, remove, and check product availability.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Display all Dell products
- Add a new product
- Remove an existing product
- Check product availability
- Case-insensitive product search

## Data Structure Used

The project uses a JavaScript array:

```javascript
var inventory = [
    "Dell Inspiron",
    "Dell XPS",
    "Dell Latitude",
    "Dell Alienware"
];
```

## CRUD Operations

- Create: `addProduct()`
- Read: `displayInventory()`
- Delete: `removeProduct()`
- Check availability: `checkProduct()`

## Testing

1. Load the application.
   Expected result: Initial Dell products are displayed.

2. Add `Dell Vostro`.
   Expected result: `Dell Vostro` appears in the inventory list.

3. Remove `Dell XPS`.
   Expected result: `Dell XPS` is removed from the inventory list.

4. Check `Dell Latitude`.
   Expected result: `Dell Latitude is in stock.`

5. Check `Dell G15`.
   Expected result: `Dell G15 is out of stock.`

## How to Run

Open `index.html` in a web browser.
