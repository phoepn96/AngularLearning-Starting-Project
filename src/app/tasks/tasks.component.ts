import { Component, Input } from '@angular/core';
import { TaskComponent, UserTask } from './task/task.component';
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
  showAddTask: boolean = false;

  constructor(private tasksService: TasksServiceService) {}

  addTask() {
    this.showAddTask = true;
  }

  onCloseAddTask(closingState: boolean) {
    this.showAddTask = closingState;
  }

  addNewTask(newTask: UserTask) {
    this.onCloseAddTask(false);
  }
}
