import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';
import { todo } from 'src/app/Models/todo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product1: any = { productId: 1, productName: 'Bardak', catagoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product2: any = { productId: 2, productName: 'Laptop', catagoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product3: any = { productId: 3, productName: 'Keyboard', catagoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product4: any = { productId: 4, productName: 'Camera', catagoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product5: any = { productId: 5, productName: 'Mouse', catagoryId: 1, unitPrice: 5, unitsInStock: 5 }


  products: Product[] = [];
  dataLoaded=false;

  productResponseModel: ProductResponseModel = {
    data: this.products,
    message: "",
    success: true
  };

  // todos: todo[] = [];

  //use private to protect outside reach operation
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log("init calisti");
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    });
  }

}
