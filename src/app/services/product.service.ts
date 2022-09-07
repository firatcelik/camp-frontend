import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../Models/productResponseModel';
import { HttpClient } from '@angular/common/http'  //React use axios or fetch to call http request
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44314/api/products/getall";


  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
