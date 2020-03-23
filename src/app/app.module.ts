import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SlideComponent } from "./slide/slide.component";
import { CategoryComponent } from "./category/category.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { FormsModule } from "@angular/forms";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductService } from "./services/product.service";
import { ProductAddComponent } from "./product-add/product-add.component";
import { AboutComponent } from "./about/about.component";
import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    CategoryComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    AboutComponent,
    ProductManagerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
