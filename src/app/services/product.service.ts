import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";

@Injectable()
export class ProductService {
  products = data;

  constructor() {}
  getProducts() { // lấy danh sách sp
    return this.products;
  }
  getProduct(id) {
  
    return this.products.find(product => product.id ==id );
  } //chi tiết sp
  removeProduct() {} //xóa
  addProduct(product) { //thêm sp
    let newObj = { id: 6, ...product };
    this.products.push(product);
  }
  editProduct() {} //sửa sp
}
