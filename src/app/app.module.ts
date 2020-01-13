import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { TasksServiceService } from 'services/tasks-service.service';
import { CheckedDirective } from 'shared/checked.directive';
import { DateDirective } from 'shared/date.directive';
import { CapitalLetterPipe } from '../../shared/capital-letter.pipe';
import { SortTasksPipe } from '../../shared/sort-tasks.pipe';
import { HttpServiceInRestDB } from 'services/httpServiceInRestDb';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoListComponent,
    DoneListComponent,
    CheckedDirective,
    DateDirective,
    CapitalLetterPipe,
    SortTasksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
           
  ],
  providers: [TasksServiceService, HttpServiceInRestDB ],
  bootstrap: [AppComponent]
})
export class AppModule { }
