import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  @Input() task!: Task;

  constructor(private tasksService: TasksService){}

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
