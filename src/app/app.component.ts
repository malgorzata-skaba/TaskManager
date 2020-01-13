import { Component} from '@angular/core';
import { TasksServiceService } from 'services/tasks-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private tasksService:TasksServiceService){  }
  
  

  
 
}
