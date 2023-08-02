import { Injectable } from '@angular/core';
import { adminProductdata } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
    productData : adminProductdata[] =[
  
    
    

  ]


  getProducts(){
    return this.http.get(`${this.apiUrl}/Product/allProducts`);
  }

  addproduct(data:adminProductdata){
    return this.http.post(`${this.apiUrl}/Product/ProductInsert`,data);
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.apiUrl}/Product/ProductDelete/id=${id}`)
  }
}
