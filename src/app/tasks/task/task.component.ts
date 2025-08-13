import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

export interface UserTask {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userTask!: UserTask;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.userTask.id);
  }
}
