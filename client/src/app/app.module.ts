import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ProductService} from './services/product.service';
import { CourselComponent } from './common/coursel';
import { NavComponent } from './common/navbar';
import { SideBarComponent } from './common/sidebar';
import { AdminComponent } from './components/admin/admin.component';
import { ViewPendingSellersComponent } from './components/admin/view-pending-sellers/view-pending-sellers.component';
import { ViewPendingReviewsComponent } from './components/admin/view-pending-reviews/view-pending-reviews.component';
import { SignUpComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { AdminSideBarComponent } from './common/sidebar.admin';
import { SellerComponent } from './components/seller/seller.component';
import { ManageProductsComponent } from './components/seller/manage-products/manage-products.component';
import { MaintainOrdersComponent } from './components/seller/maintain-orders/maintain-orders.component';
import { SellerSideBarComponent } from './common/sidebar.seller';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AddProductComponent } from './components/seller/manage-products/add-product/add-product.component';

import { BuyerComponent } from './components/buyer/buyer.component';
import { ViewCartComponent } from './components/buyer/view-cart/view-cart.component';
import { BuyerSideBarComponent } from './common/sidebar.buyer';
import { EditProductComponent } from './components/seller/manage-products/edit-product/edit-product.component';
import { EditOrderComponent } from './components/seller/maintain-orders/edit-order/edit-order.component';
import { AuthenticationInterceptors } from './interceptors/AuthenticationInterceptors';

import { ViewOrdersComponent } from './components/buyer/view-orders/view-orders.component';
import { ShippingAddressComponent } from './components/buyer/shipping-address/shipping-address.component';
import { PaymentSettingsComponent } from './components/buyer/payment-settings/payment-settings.component';
import { NotificationsComponent } from './components/buyer/notifications/notifications.component';
import { CategorizedProductComponent } from './components/categorized-product/categorized-product.component';
import { CheckoutComponent } from './components/buyer/checkout/checkout.component';
import { CarouseNewComponent } from './common/carouse-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CourselComponent,
    NavComponent,
    SideBarComponent,
    AdminSideBarComponent,
    SellerSideBarComponent,
    BuyerSideBarComponent,
    AdminComponent,
    ViewPendingSellersComponent,
    ViewPendingReviewsComponent,
    SignUpComponent,
    LoginComponent,
    SellerComponent,
    ManageProductsComponent,
    MaintainOrdersComponent,
    ViewProductsComponent,
    AddProductComponent,
    BuyerComponent,
    ViewCartComponent,
    EditProductComponent,
    EditOrderComponent,
    ViewOrdersComponent,
    ShippingAddressComponent,
    PaymentSettingsComponent,
    NotificationsComponent,
    EditOrderComponent,
    CategorizedProductComponent,
    CheckoutComponent,
    CarouseNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptors,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  ngOnInit(){
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  }

  ngOnDestryo(){
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  }
}
