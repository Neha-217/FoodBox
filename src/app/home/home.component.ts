import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { FoodService } from '../Service/food.service';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:string[] = []
// public productList : any;
 products: Product[] = [];


  constructor(private fs:FoodService,
    private productService: ProductService,
    private router: Router,
    private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.arouter.params.subscribe(params =>{
      if(params['searchItem'])
      this.products = this.productService.getProductList().filter((food: { prodname: any; }) =>food.prodname.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else 
      this.getProducts();
      
    })*/

    this.foods = this.fs.getAll();

   /* this.api.getProduct()
    .subscribe(res =>{
      this.productList = res;
    })*/
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

}
