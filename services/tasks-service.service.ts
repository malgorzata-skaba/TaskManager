import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'model/task';
import { HttpServiceInRestDB } from './httpServiceInRestDb';


@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  tfNewTask: string;
  

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  ngOnInit(): void {
  }
  constructor(private httpServiceRestDb: HttpServiceInRestDB) {
    this.httpServiceRestDb.getTask().subscribe(taskList=>{
      this.taskListObs.next(taskList);
    });
    
    //const taskList = [];
    //this.taskListObs.next(taskList);
  }
  add(task: Task){
    const taskList = this.taskListObs.getValue();
    taskList.push(task);          
    this.taskListObs.next(taskList);
  }
  remove(task: Task): void {
    const taskList = this.taskListObs.getValue().filter(e => e !==task)
    this.httpServiceRestDb.removeTask(task).subscribe(task=>
      {
        console.log(task);
       
      });
    this.taskListObs.next(taskList);
  }
  done(task: Task): void {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const taskList = this.taskListObs.getValue();
    this.taskListObs.next(taskList);
  }
  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  addTaskToDb(task:Task)
  {
    this.httpServiceRestDb.addTasks(task).subscribe(task=>{
      console.log(task);
      
    });
  }



  
}
