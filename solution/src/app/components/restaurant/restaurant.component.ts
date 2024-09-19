import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PosComponent } from "../pos/pos.component";
import { OrderService } from '../../services/order.service';
import { Orders } from '../../models/orders';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit, OnDestroy{
  orders: Orders[] = [];
  private ordersSubscription!: Subscription;

  constructor(private orderService: OrderService){
  }

  ngOnInit() {
    this.ordersSubscription = this.orderService.ordersList.subscribe(orders => {
      this.orders = orders;
    });
  }

  ngOnDestroy() {
    if (this.ordersSubscription) {
      this.ordersSubscription.unsubscribe();
    }
  }

}
