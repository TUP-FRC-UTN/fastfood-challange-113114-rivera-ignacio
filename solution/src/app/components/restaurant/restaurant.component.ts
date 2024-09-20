import { Component } from '@angular/core';
import { PosComponent } from "../pos/pos.component";
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, CommonModule, DeliveryPointComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent{  
  constructor(public orderProvider: OrderService){ }
}
