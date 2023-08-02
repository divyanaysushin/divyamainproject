import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminCategory } from 'src/app/admin-product/models/category';
import { environment } from 'src/environments/environment.development';
import { admincategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {
  apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) { }

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

  addCategory(data:admincategory){
    return this.http.post(`${this.apiUrl}/Category/CategoryInsert`,data);
  }

  deleteCategory(id:number){
    return this.http.delete(`${this.apiUrl}/Category/CategoryDelete?id=${id}`)
  }

  // editCategory(id:number){
  //   return this.http.delete(`${this.apiUrl}/Category/CategoryEdit/id=${id}`)
  // }
  
}
  