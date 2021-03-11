import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListModel } from '../models/productListModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:5000/api/"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductListModel> {
    return this.httpClient.get<ProductListModel>(this.apiUrl + "products/getall")
  }
}
