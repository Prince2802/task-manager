import { Component, Input } from '@angular/core';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTasks(){
    this.isTask = true;
  }
  onCloseTasks(){
    this.isTask = false;
  }
}
