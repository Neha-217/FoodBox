import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  //{path: '', component: HomeComponent },
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path: 'products', component: ProductsComponent },
  {path:'cart', component: CartComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'create-product', component: CreateProductComponent},
  //{path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'update-product/:pid', component: UpdateProductComponent },
  {path:'admin', component: AdminComponent},
  {path:'user', component:UserComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'payment', component:PaymentComponent},
  {path:'order-confirmation', component:OrderConfirmationComponent},
  {path:'product-details/:pid', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
