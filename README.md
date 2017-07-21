# List Manager

A project to provide user friendly interface for a user to manage products.

## Task
Create a front end user friendly interface using HTML and CSS and consume server end points using JavaScript to list all products, view selected product, add new product, update existing product and delete product.

## Server
The server is written in Python, to run it use command:
```
python server.py
```
Server will run on port:3000

## API's
- GET /products - This end point enables you to get a full list of products.
- GET /product/{id} - This end point enables you to get one product by ID. In this end point id is a variable for the product and can be any number.
- POST /product – This end point enables you to add one product. You need to pass body of name, price and description.
- PUT /product/{id} – This end point enables you to update one product by given id. You need to pass body of name, price and description.
- DELETE /product/{id} – This end point enables you to delete one product by given id.

## Status
This project is still work in progress.
