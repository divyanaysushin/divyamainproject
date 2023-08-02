import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDataService } from '../../services/order-data.service';
import { OrderDelete, OrderProduct } from '../../models/Orderproduct';
import { Allproducts } from 'src/app/landingpage/models/allproducts';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent {
  public orderedItems: OrderDelete[]; // Declare as an instance variable here

  constructor(private route: ActivatedRoute, private orderservice: OrderDataService) { }

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('user_id'), 10); // Convert the string to a number
    console.log('User ID:', userId);

    this.orderservice.ordereditem(userId).subscribe(
      (response: OrderDelete[]) => { // Change the type to OrderProduct[]
        console.log('API Response:', response);
        this.orderedItems = response; // Use "this" keyword to access the instance variable
      },
      (error) => {
        console.error('Failed to retrieve user details:', error);
      }
    );
  }

  deletemyorder(id:number)
  {
    this.orderservice.deleteMyorder(id).subscribe((res)=>
    {
      if(res)
      {
        alert("deleted successfully")
      }
    })
  }
}
