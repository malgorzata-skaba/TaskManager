import { Component, OnInit} from '@angular/core';
import { TasksServiceService } from 'services/tasks-service.service';
import { Task } from 'model/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
  
})
export class DoneListComponent implements OnInit {
  
  doneTask: Array<Task> = [];

  
  constructor(private serviceTasks: TasksServiceService){
    this.serviceTasks.getTaskListObs().subscribe((tasks:Array<Task>) =>{
      this.doneTask =tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {
  }

}
