import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserTask } from '../task/task.component';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input() currentUserId: string = '';
  currentTitleInput: string = '';
  currentSummaryInput: string = '';
  currentDuedateInput: string = '';
  newlyAddedTask!: UserTask;
  private taskId = 5;

  constructor(private taskService: TasksServiceService) {}

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.genNewTask();
    this.taskService.addTask(this.newlyAddedTask);
    this.close.emit();
  }

  genNewTask() {
    this.newlyAddedTask = {
      userId: this.currentUserId,
      id: this.genNewTaskId(),
      title: this.currentTitleInput,
      summary: this.currentSummaryInput,
      dueDate: this.currentDuedateInput,
    };
  }

  genNewTaskId(): string {
    this.taskId++;
    return `t${this.taskId}`;
  }
}
