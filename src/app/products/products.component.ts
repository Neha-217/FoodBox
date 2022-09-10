import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Service/api.service.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  public filterCuisine : any;
  searchKey:string = "";
  
  constructor(private api :ApiServiceService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res =>{
      this.productList = res;
      this.filterCuisine = res;
      this.productList.forEach((a:any) => {
       /* if(a.cuisine ==="Indian" || a.cuisine ==="Chinese"){
          a.cuisine ="Italian"
        }*/
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(cuisine:string){
    this.filterCuisine = this.productList
    .filter((a:any)=>{
      if(a.cuisine == cuisine || cuisine == ''){
        return a;
      }
    })
  }

}