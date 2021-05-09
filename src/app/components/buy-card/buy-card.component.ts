import { Component, OnInit  } from '@angular/core';
import {  OrderManagementService } from '../../services/order-management.service';
@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent implements OnInit {

  constructor( private orderService :OrderManagementService) { }

  // <input type="text" [(ngModel)]="passengerName" placeholder="passenger name" #name/>
  // <input type="text" [(ngModel)]="source" placeholder="source" #source/>
  // <input type="text" [(ngModel)]="goul" placeholder="goul" #goul/>
  // <input type="number" [(ngModel)]="planeTicketPrice" placeholder="plane Ticket Price" #price/>
  // <input type="datetime" [(ngModel)]="dateTime" placeholder="dateTime" #dateTime/>
  // <input type="number" [(ngModel)]="numberPlane" placeholder="number Plane" #numberPlane/>
   passengerName:string='';
   source:string='';
   goul:string='';
   planeTicketPrice:number=0;
   dateTime:any=null;
   numberPlane:number=0;


  
  addNewCard(){
    const obj ={
      passengerName: this.passengerName,
      source: this.source,
      goul: this.goul,
      planeTicketPrice: this.planeTicketPrice,
      dateTime: this.dateTime,
      numberPlane: this.numberPlane};
      
    this.orderService.addCard(obj);
   
    this.passengerName='';
    this.source='';
    this.goul='';
    this.planeTicketPrice=0;
    this.dateTime=null;
    this.numberPlane=0;
  }
  ngOnInit(): void {
  }

}
