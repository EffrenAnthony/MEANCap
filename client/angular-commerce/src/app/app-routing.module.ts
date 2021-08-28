import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './error404/error404.component';
import { AdminGuard } from './auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        canActivate: [AdminGuard],
        path:'contact',
        component: ContactComponent
      },
      {
        canActivate: [AdminGuard],
        path:'edit/:id',
        component: EditProductComponent
      },
      {
        path:'home/:id',
        component:ProductDetailComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'aboutus',
        loadChildren: () => import('./aboutus/aboutus.module').then(module => module.AboutusModule)
      },
      {
        path:'libraries',
        loadChildren: () => import('./libraries/libraries.module').then(module => module.LibrariesModule)
      },
    ]
  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
