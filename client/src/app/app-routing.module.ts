import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ViewPendingSellersComponent } from './components/admin/view-pending-sellers/view-pending-sellers.component';
import { ViewPendingReviewsComponent } from './components/admin/view-pending-reviews/view-pending-reviews.component';
import { SellerComponent } from './components/seller/seller.component';
import { ManageProductsComponent } from './components/seller/manage-products/manage-products.component';
import { AddProductComponent } from './components/seller/manage-products/add-product/add-product.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { ViewCartComponent } from './components/buyer/view-cart/view-cart.component';
import { LoginComponent } from './components/login/login.component';
import { ViewProductsComponent } from './components/view-products/view-products.component'
import { EditProductComponent } from './components/seller/manage-products/edit-product/edit-product.component';
import { MaintainOrdersComponent } from './components/seller/maintain-orders/maintain-orders.component';
import { ViewOrdersComponent } from './components/buyer/view-orders/view-orders.component';
import { ShippingAddressComponent } from './components/buyer/shipping-address/shipping-address.component';
import { PaymentSettingsComponent } from './components/buyer/payment-settings/payment-settings.component';
import { NotificationsComponent } from './components/buyer/notifications/notifications.component';
import { AdminGuard } from '.././app/Guards/adminGuard'
import { CategorizedProductComponent } from '../app/components/categorized-product/categorized-product.component'
import { EditOrderComponent } from './components/seller/maintain-orders/edit-order/edit-order.component';
import { CheckoutComponent } from './components/buyer/checkout/checkout.component';



const routes: Routes = [
  {path:'',
  component: AppComponent ,
  children:[
    {
      path: '',
       redirectTo:'product',
      pathMatch:'full',
      canActivate: [AdminGuard]
    },
    {
      path: 'product',
      component:ProductListComponent,
      canActivate: [AdminGuard]
    },

    {
      path: 'signup',
      component: SignUpComponent,
      //canActivate: [AdminGuard]
      //component: SignUpComponent
      
    },

    {
      path : 'viewProduct',
      component : ViewProductsComponent,
      canActivate: [AdminGuard]
    },
    {
      path : 'categorizedView',
      component : CategorizedProductComponent,
      canActivate: [AdminGuard]
    },

    {
      path: 'admin',
      component: AdminComponent,
    
    },
    {
      path: 'admin/view-pending-sellers',
      component: ViewPendingSellersComponent,
      
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'admin/view-pending-reviews',
      component: ViewPendingReviewsComponent
    },
    {
      path: 'seller',
      component: SellerComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'seller/manage-products',
      component: ManageProductsComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'seller/manage-products/add-products',
      component: AddProductComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'seller/manage-products/edit-products',
      component: EditProductComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'seller/maintain-order',
      component: MaintainOrdersComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'seller/maintain-order/update-status',
      component: EditOrderComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer',
      component: BuyerComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/view-cart',
      component: ViewCartComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/view-orders',
      component: ViewOrdersComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/shipping-address',
      component: ShippingAddressComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/payment-settings',
      component: PaymentSettingsComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/notifications',
      component: NotificationsComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'buyer/checkout',
      component: CheckoutComponent,
      canActivate: [AdminGuard]
    }
    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
