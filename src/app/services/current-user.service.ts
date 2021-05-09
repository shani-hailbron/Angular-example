import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  // private currentUser = {
  //   name:'aaaa',
  //   role: 'agentxx',
  // }
  private currentUser = {
    name:'aaaa',
    role: 'agent',
  }



  getCurrentUser(){
    return this.currentUser;
  }




  constructor() { }
}
