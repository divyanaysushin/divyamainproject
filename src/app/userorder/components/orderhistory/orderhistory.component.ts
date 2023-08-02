import { Component } from '@angular/core';
import { OrderDataService } from '../../services/order-data.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {
  // constructor( private orderDataService: OrderDataService ) {}

  // prevProducts() {
  //   this.orderDataService.previousitem().subscribe(
  //     (response) => {
  //       console.log('Order placed successfully', response);
  //     }
  //   );
  // }
}
