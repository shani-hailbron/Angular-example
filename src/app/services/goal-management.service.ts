import { Injectable } from '@angular/core';
import { CurrentUserService} from '../services/current-user.service';

const gouls=['Africa' , 'USA', 'Ostralya' , 'Israel'];

@Injectable({
  providedIn: 'root'
})
export class GoalManagementService {

  private gouls=gouls;


  getGouls(){
    return this.gouls;
  }

  //הוספת יעד חדש
  //לכאורה הבדיקה האם הוא סוכן מיותרת כי רק סוכן יכול לראות את השורות של הוספת יעד חדש
  addGoul(newGoul: string){
    if(this.currentUserService.getCurrentUser().role==='agent'){//אם זה סוכן
       this.gouls.push(newGoul);
    } 
  }
//מחזיר האם מי שמחובר כרגע הוא סוכן או לא 
//כי כדי להציג את האפשרות של הוספת יעד חדש צריך שמי שמחובר יהיה  סוכן ולא לקוח
  detailsMode(){
    if(this.currentUserService.getCurrentUser().role==='agent'){//אם זה סוכן
        return 1;
    }
    return 0;
  }



  constructor(private currentUserService : CurrentUserService) { }
}
