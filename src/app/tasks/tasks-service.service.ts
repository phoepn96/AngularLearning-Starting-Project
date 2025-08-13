import { Injectable } from '@angular/core';
import { UserTask } from './task/task.component';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor() {}

  public dummyTasks: UserTask[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(task: UserTask) {
    this.dummyTasks.push(task);
  }

  removeTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }
}
