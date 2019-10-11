import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  public taskText: string;

  constructor(private taskService: TaskService) {
    this.taskText = '';
  }

  ngOnInit() {
  }

  private addTask(): void {
    this.taskService.addTask(this.taskText);
    this.taskText = '';
  }
}
