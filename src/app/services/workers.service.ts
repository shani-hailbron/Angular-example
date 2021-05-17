import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

export interface Worker{
  id:number,
  job:number,
  salary:number
}

@Injectable({
  providedIn: 'root'
})

export class WorkersService {

  constructor(private HttpService:HttpClient) { }
  getWorkers(){
    return this.HttpService.get<Worker[]>('/assets/workers.json');
  }
}
