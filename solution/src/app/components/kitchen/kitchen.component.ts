import { Component} from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent{
  constructor(public orderProvider: OrderService){}
}
