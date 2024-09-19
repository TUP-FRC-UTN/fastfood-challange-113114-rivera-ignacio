import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  name: string = "";
  description: string = "";

  constructor(private orderProvider: OrderService){}

  AddOrder(form: NgForm){
    if(form.valid){
      this.orderProvider.AddOrder(this.name, this.description);
      this.name = "";
      this.description = "";     
    }
  }
}
