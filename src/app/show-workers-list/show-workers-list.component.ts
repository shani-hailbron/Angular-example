import { Component, OnInit } from '@angular/core';
import { Worker ,WorkersService} from '../services/workers.service';
@Component({
  selector: 'app-show-workers-list',
  templateUrl: './show-workers-list.component.html',
  styleUrls: ['./show-workers-list.component.css']
})
export class ShowWorkersListComponent implements OnInit {
 
  workers: Worker[]=[];

  constructor(private workersService : WorkersService) { 

    this.workersService.getWorkers().subscribe((data)=>{
        this.workers = data;
    })
  }

  ngOnInit(): void {
  }

}
