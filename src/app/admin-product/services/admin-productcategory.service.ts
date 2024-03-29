import { Injectable } from '@angular/core';
import { adminCategory } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { adminProductdata } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductcategoryService {
  apiUrl=environment.apiUrl;
  constructor( private http:HttpClient) { }

  categoryData : adminCategory[] =[
    // {
    //   image:"../../../assets/images/image 12.png",
    //   name: 'Skin Care',
    // },
    // {
    //   image:"../../../assets/images/image 12-1.png",
    //   name: 'Laptops & PC'
    // },
    // {
    //   image:"../../../assets/images/image 12-5.png",
    //   name: 'Smartphones'
    // },
    // {
    //   image:"../../../assets/images/image 12-3.png",
    //   name: 'Fashion'
    // },
    // {
    //   image:"../../../assets/images/image 12-5.png",
    //   name: 'Electronics'
    // },
    
    // {
    //   image:"../../../assets/images/image 12-4.png",
    //   name: 'Lifestyle'
    // }

  ]


  // getCategory(){
  //   return this.categoryData;
  // }

  getCategory(){
    return this.http.get(`${this.apiUrl}/category/allcategory`);
  }

  getProducts(){
    return this.http.get(`${this.apiUrl}/Product/allProducts`);
  }
  getProductById(id:number){
    return this.http.get(`${this.apiUrl}/Product/ProductById?id=${id}`);
  }

  addproduct(data:adminProductdata){
    console.log(data)
    return this.http.post(`${this.apiUrl}/Product/ProductInsert`,data);
    
  }

  editProduct(editedProduct: adminProductdata): Observable<any>{
    console.log(editedProduct);
    
    return this.http.put(`${this.apiUrl}/Product/ProductUpdate?id=${editedProduct.id}`,editedProduct);
  }
  
  deleteProduct(id:number){
    return this.http.delete(`${this.apiUrl}/Product/ProductDelete?id=${id}`);
  }

  searchproducts(name:string){
    return this.http.get(`${this.apiUrl}/Product/ProductSearch?proName=${name}`);
  }

}
