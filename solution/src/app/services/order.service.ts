import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public ordersList: Object [] = [];
  public pendingCookList : Order [] = [];
  public cookingList: Order [] = [];
  public readyList: Order [] = [];

  AddOrder(name: string, description: string): Order{
    var newOrder: Order = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: name,
      description: description,
      date: new Date()
    }
    this.ordersList.push({
      nombre: newOrder.name,
      descripcion: newOrder.description,
      numero: newOrder.number
    });
    this.pendingCookList.push(newOrder);
    return newOrder;
  }

  AddCookingList(order: Order): void{
    this.cookingList.push(order);
    this.pendingCookList = this.pendingCookList.filter(orderP => orderP != order);    
  }

  AddReadyList(order: Order): void{
    this.readyList.push(order);
    this.cookingList = this.cookingList.filter(orderC => orderC != order);
  }

  DeliverOrder(order: Order){
    this.readyList = this.readyList.filter(orderR => orderR != order);
  }
  
}
