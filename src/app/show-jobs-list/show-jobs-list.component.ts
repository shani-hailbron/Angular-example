import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Job , JobsService } from '../services/jobs.service';
import { Worker , WorkersService} from '../services/workers.service';
import { combineLatest, forkJoin, Observable,zip } from 'rxjs';

@Component({
  selector: 'app-show-jobs-list',
  templateUrl: './show-jobs-list.component.html',
  styleUrls: ['./show-jobs-list.component.css']
})
export class ShowJobsListComponent implements OnInit {
  jobs:Job[]=[];
  workers:Worker[]=[];
  avg:number[]=[];

  constructor(private workersService:WorkersService , private jobsService:JobsService) { 
    this.jobsService.getJobs().subscribe((data)=>{
      this.jobs=data;
    })
    zip(this.workersService.getWorkers(),this.jobsService.getJobs()).subscribe(([workers,jobs])=>
    {
      this.workers = workers;
      this.jobs=jobs;
      this.jobs.map(job =>{
        let arr=this.workers.filter(worker => worker.job===job.id);
        this.avg.push(arr.reduce((a,b)=>a+(b["salary"]||0),0)/arr.length || 0) ;
      })
    }
    )
  }

  ngOnInit(): void {
  }

}
