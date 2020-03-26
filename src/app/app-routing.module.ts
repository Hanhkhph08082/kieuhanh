import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ServiceComponent } from "./service/service.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "add-product", component: ProductAddComponent },
  { path: "about", component: AboutComponent },
  { path: "service", component: ServiceComponent },
  { path: 'products', component: ProductListComponent},
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "manager-product", component: ProductManagerComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
