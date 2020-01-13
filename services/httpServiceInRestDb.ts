import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from 'model/task';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceInRestDB {

  readonly URL_DB:string = 'https://tasks-45bf.restdb.io/rest/tasks';
  readonly APIKEY:string = '5e16edabb68f0802dd3e6194';
  //readonly param = new HttpParams().set('apikey', '5e16edabb68f0802dd3e6194')
  readonly header = new HttpHeaders({'x-apikey':this.APIKEY});

  constructor(private http:HttpClient) {
    
   
  }

  getTask():Observable<Array<Task>>{

    //this.http.get(this.URL_DB,{params:this.param}).subscribe...
     return this.http.get<Array<Task>>(this.URL_DB,{headers:this.header});
  }  

  addTasks(task: Task): Observable<Task> {
   
    //JSON.stringify(task)
    return this.http
    .post<Task>(this.URL_DB,task,{headers:this.header}); 
  }


  removeTask(task:Task): Observable<Task> {
    let URL_DB_REMOVE = this.URL_DB+"/"+task._id;
    return this.http.delete<Task>(URL_DB_REMOVE,{headers:this.header});
      
  }

  




}
