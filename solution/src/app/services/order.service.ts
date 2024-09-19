import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersListSubject = new BehaviorSubject<Orders[]>([]);
  ordersList = this.ordersListSubject.asObservable();

  private pendingCookList : Orders [] = [];
  private cookingList: Orders [] = [];
  private radyList: Orders [] = [];

  GetOrders(): Orders[]{
    return this.ordersListSubject.value;
  }

  AddOrder(name: string, description: string): Orders{
    var newOrder: Orders = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: name,
      description: description,
      date: new Date()
    }
    var updatedOrdersList = [...this.ordersListSubject.value, newOrder];
    this.ordersListSubject.next(updatedOrdersList); 
    return newOrder;
  }

  RemoveOrder(number: number): boolean{
    const updatedOrdersList = this.ordersListSubject.value.filter(order => order.number !== number);
    this.ordersListSubject.next(updatedOrdersList);
    return true;
  }
}
