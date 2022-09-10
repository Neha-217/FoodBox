import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pid!: number;
  product: Product = new Product();

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.pid = this.route.snapshot.params['pid'];
    this.productService.getProductById(this.pid).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.productService.updateProduct(this.pid, this.product).subscribe(data => {
      this.goToProductList();
    },
      error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/products']);
  }

}

