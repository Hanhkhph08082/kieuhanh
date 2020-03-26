import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
 // products = data;

  api= 'https://5e7c2234a917d70016682ea2.mockapi.io/products';

  constructor(
    private http:HttpClient
  ) {}
  getProducts(): Observable<Product[]> {
    // lấy danh sách sp
    //return this.products;
     return this.http.get<Product[]>(this.api);

  }
    getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  } //chi tiết sp
  removeProduct() {} //xóa
  updateProduct(product) {
    return this.products.map(item => (item.id === product.id ? product : item));
  }
  addProduct(product) {
    //thêm sp
    let newObj = { id: 6, ...product };
    this.products.push(product);
  }
  editProduct() {} //sửa sp
}
