import { Component, OnInit } from '@angular/core';
import { GoalManagementService } from '../../services/goal-management.service';
import { OrderManagementService} from '../../services/order-management.service';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  gouls:any[];
  orders:any[];

  // di - dependency injection - תלות לפי דרישה
  constructor(private goulsService : GoalManagementService , private ordersService :OrderManagementService  ) { 
    this.gouls = this.goulsService.getGouls();
    this.orders = this.ordersService.getOrders();
  }

  ngOnInit(): void {
  }

}
