import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { DemoangularComponent } from './demoangular/demoangular.component';
import { DirectivaTestDirective } from './directiva-test.directive';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CarouselComponent,
    NavbarComponent,
    ProductComponent,
    DemoangularComponent,
    DirectivaTestDirective,
    HomeComponent,
    ContactComponent,
    LayoutComponent,
    Error404Component,
    ProductDetailComponent,
    EditProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
