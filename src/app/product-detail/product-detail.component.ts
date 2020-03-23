import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.router.params.subscribe(param => {
     this.product = this.productService.getProduct(param.id);
    })
  }
}
