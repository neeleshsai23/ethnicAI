import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';


export const routes = [
   {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"home",component:HomeComponent,data:{breadcrumb:"eAnythingIndian - Online Ethnic Clothing Store"}},
   {path:"cart",component:CartComponent,data:{breadcrumb:"Shopping Cart"}},
   {path:"wishlist",component:WishlistComponent,data:{breadcrumb:"Wishlist"}},
   {path:"account",component:AccountComponent,data:{breadcrumb:"My Account"}},
   {path:"orders",component:OrdersComponent,data:{breadcrumb:"My Orders"}},
   {path:"product",component:ProductLandingComponent,data:{breadcrumb:"Product Landing Page"}}
]


@NgModule({
    declarations: [HomeComponent, CartComponent, WishlistComponent, AccountComponent, OrdersComponent, ProductLandingComponent],
    imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
    
  })



export class ShowroomModule {}