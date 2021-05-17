import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  workersList:number=0;
  setShowWorkers(num:number){
      this.workersList=num;
  }
  title = 'Angular-project';
}
