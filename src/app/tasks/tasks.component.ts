import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksServiceService } from './tasks-service.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) currentUserId!: string;
  @Input({ required: true }) currentUserName!: string;
  constructor(private tasksService: TasksServiceService) {}

  showAddTask: boolean = false;
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.currentUserId);
  }

  onCloseAddTask() {
    this.showAddTask = false;
  }

  addTask() {
    this.showAddTask = true;
  }
}
