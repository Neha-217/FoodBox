import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  //private baseURL = "http://localhost:8080/product/"
  
  constructor(private http: HttpClient) { }


  getProduct(){
    return this.http.get<any>("http://localhost:8080/product/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  /*getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }
*/

}
