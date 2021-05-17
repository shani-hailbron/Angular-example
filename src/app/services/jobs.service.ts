import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http';

export interface Job{
  id:number,
  description:string
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private HttpService:HttpClient) { }
  getJobs(){
    return this.HttpService.get<Job[]>('/assets/jobs.json');
  }
}
