import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../Service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  isDisable = false;
  
  constructor(private productService: ProductService,
    private router: Router) { }

   ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

  productDetails(pid: number){
    this.router.navigate(['product-details', pid]);
  }

  updateProduct(pid: number){
    this.router.navigate(['update-product', pid])

  }

  deleteProduct(pid: number){
    this.productService.deleteProduct(pid).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }

 // onDisableProduct(){
   // this.isDisable = true;
  //}

  visible : boolean = false;
  //show():void{
    //this.visible = !this.visible;
    isAllowed = (optional: any) => {
      return optional === 0 ? true : this.visible;
    }
    changeVisible = () => {
      this.visible = !this.visible
    }
  }

