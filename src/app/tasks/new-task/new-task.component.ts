import { Component, EventEmitter, Input, Output } from '@angular/core';
import { title } from 'process';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent{
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  storedTitle = '';
  storedSummary = '';
  storedDate = '';

  constructor(private tasksService: TasksService){}

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.storedTitle,
      summary: this.storedSummary,
      date: this.storedDate
    },this.userId);
    this.close.emit();
  }
}
