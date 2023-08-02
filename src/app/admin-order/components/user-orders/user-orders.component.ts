import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderProduct } from '../../models/user-order';
import { OrderdataService } from '../../services/orderdata.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {

  userorder() {
    this.router.navigateByUrl('/userDetails');
  }

  data: OrderProduct[] = [];

  constructor(private orderService: OrderdataService, private router: Router) {
    this.orderService.displayOrder().subscribe((res) => {
      this.data = res
    })
  }
  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe((
      res)=>{
        if(res)
        {
          console.log(res);
        }
      }
    )
  }
}
