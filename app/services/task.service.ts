import { Injectable } from '@angular/core';
import { Task } from '../classes/task';

@Injectable()
export class TaskService {

  private task: Task[];
  private nextId: number;

  constructor() {
    this.task = [
      new Task(0, 'Cook dinner.'),
      new Task(1, 'Pick up dry cleaners.'),
      new Task(2, 'Start laundry')
    ];

    this.nextId = 3;
  }

  public addTask(text: string): void {
    let task = new Task(this.nextId, text);
    this.task.push(task);
    this.nextId++;
  }

  public getTask(): Task[] {
    return this.task;
  }

  public removeTask(id: number): void {
    this.task = this.task.filter((task) => task.id != id);
  }

}
