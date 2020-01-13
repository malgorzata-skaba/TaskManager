import { Component, OnInit} from '@angular/core';
import { TasksServiceService } from 'services/tasks-service.service';
import { Task } from 'model/task';
import { HttpServiceInRestDB } from 'services/httpServiceInRestDb';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  
  tfNewTask:string;
  constructor(private serviceTasks: TasksServiceService, private httpInRestDb:HttpServiceInRestDB ) { }

  ngOnInit() {
  }

  btAddTask(){
    const task:Task = ({name:this.tfNewTask, created: new Date().toLocaleString(), isDone:false})
    this.serviceTasks.add(task);
    this.serviceTasks.addTaskToDb(task);
    this.tfNewTask = ''; 
  }  

}
