import { Component } from '@angular/core';
import { AdminCategoryService } from '../../services/admin-category.service';
import { admincategory } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent {
  


  public categoryData: admincategory[] = [];

  constructor(private categoryService: AdminCategoryService, ) {
    this.categoryService.getCategory().subscribe(
      (response: admincategory[]) => {
        console.log(response);
        this.categoryData = response;
      },
      (error) => {
        console.log('Error getting categories', error);
      }
    );
  }

  deleteCategory(id: number) {

    this.categoryService.deleteCategory(id).subscribe(
      (response) => {
        console.log('Category deleted successfully', response);
        
        this.categoryData = this.categoryData.filter((category) => category.id !== id);
      },
      (error) => {
        console.error('Error deleting category', error);
       
      }
    );
  }
}
  

