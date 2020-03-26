import { Component, OnInit } from "@angular/core";
//import { data } from "../MockData";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor(
     private productService: ProductService
  ) {}

  ngOnInit(): void {
     this.getProducts();
  }

  getProducts(){
     this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }

  //products = data;
 // selected: Product;
  products: Product[];
  selected: Product;

  showDetail(product) {
    this.selected = product;
    console.log(this.selected);
  }
  
  removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
}
