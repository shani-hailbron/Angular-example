import { Component, OnInit } from '@angular/core';
import { GoalManagementService} from '../../services/goal-management.service'
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor(private userService: GoalManagementService ) {
    this.mode=this.userService.detailsMode();
  }

  mode:number=0;
  public goulName:string='';

  addNewGoul(){
    if(this.goulName){
      this.userService.addGoul(this.goulName);
    }

    this.goulName='';
  }
   


  ngOnInit(): void {
    
  }

}
