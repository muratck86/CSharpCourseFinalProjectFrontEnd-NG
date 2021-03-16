import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:5000/api/"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let path = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(path)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>  {
    let path = this.apiUrl + "products/getbycategoryid?id="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(path)
  }
}
