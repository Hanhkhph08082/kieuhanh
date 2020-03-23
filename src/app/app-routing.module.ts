import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";

const routes: Routes = [
  { path: "add-product", component: ProductAddComponent },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductListComponent },
 { path: "manager-product", component: ProductManagerComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
