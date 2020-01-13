import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { TasksServiceService } from 'services/tasks-service.service';
import { Task } from 'model/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']

})
export class ToDoListComponent implements OnInit {

  toDoList: Array<Task> = [];

  constructor(private serviceTasks: TasksServiceService) {
    this.serviceTasks.getTaskListObs().subscribe((tasks: Array<Task>) => {
      //this.toDoList = tasks.slice();
      this.toDoList = tasks.filter(t => t.isDone === false);
    });
  }
  ngOnInit() {
  }
  remove(task: Task) {
    this.serviceTasks.remove(task);
  }

  done(task: Task) {
    
    this.serviceTasks.done(task);
  }
  getColor() {
    return this.toDoList.length >= 5 ? 'red' : 'green';
  }

}
