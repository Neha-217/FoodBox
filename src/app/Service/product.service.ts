import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Product } from '../product';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/product/"
  
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: Product): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }

  getProductById(pid: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}${pid!}`);
  }

  updateProduct(pid: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${pid}`, product);
  }

  deleteProduct(pid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${pid}`);
  }
}

