import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pid!: number;
  product!: Product
  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['pid'];
  this.product = new Product();
  this.productService.getProductById(this.pid).subscribe(data => {
    this.product = data;
  })
  }

}
