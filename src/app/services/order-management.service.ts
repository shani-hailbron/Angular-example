import { Injectable } from '@angular/core';
import { detailsOrder} from '../types/detailsOrder';

// [detailsOrder.passengerName]:'aaaa',
// [detailsOrder.source]:'israel',
// [detailsOrder.goul]: 'USA',
// [detailsOrder.planeTicketPrice]:1550,
// [detailsOrder.dateTime]:'date: 04/03/2021 time: 00:33',
// [detailsOrder.numberPlane]:655


const orders=[{
 passengerName:'aaaa',
 source:'israel',
 goul: 'USA',
 planeTicketPrice:1550,
 dateTime:'date: 04/03/2021 time: 00:33',
 numberPlane:655

},{
  passengerName:'bbb',
  source:'israel',
  goul: 'USA',
  planeTicketPrice:2000,
  dateTime:'date: 04/03/2021 time: 00:33',
  numberPlane:100

},{
  passengerName:'cccc',
  source:'Africa',
  goul: 'USA',
  planeTicketPrice:700,
  dateTime:'date: 20/03/2021 time: 00:33',
  numberPlane:632

},{
  passengerName:'dddd',
  source:'USA',
  goul: 'israel',
  planeTicketPrice:1500,
  dateTime:'date: 04/04/2021 time: 00:50',
  numberPlane:1050

}

];


@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
 private orders = orders;

 getOrders(){
   return this.orders;
 }

//  <input type="text" [(ngModel)]="passengerName" placeholder="passenger name" #name/>
//     <input type="text" [(ngModel)]="source" placeholder="source" #source/>
//     <input type="text" [(ngModel)]="goul" placeholder="goul" #goul/>
//     <input type="number" [(ngModel)]="plane Ticket Price" placeholder="plane Ticket Price" #price/>
//     <input type="datetime" [(ngModel)]="dateTime" placeholder="dateTime" #dateTime/>
//     <input type="number" [(ngModel)]="numberPlane" placeholder="number Plane" #numberPlane/>
//  addNewCard(obj: typeof orders[0]){
//    this.orders.push(obj);
//  }


addCard(obj: typeof orders[0]){
  this.orders.push(obj);
}
  constructor() { }
}
