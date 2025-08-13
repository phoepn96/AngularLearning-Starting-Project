import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { TasksServiceService } from './tasks/tasks-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  currentUser: { id: string; name: string; avatar: string } | undefined;
  currentUserName!: string;

  onSelectUser(id: string) {
    this.currentUser = DUMMY_USERS.find((user) => user.id === id);
    if (this.currentUser) {
      this.currentUserName = this.currentUser.name;
    }
  }
  logUser() {
    console.log(this.currentUser);
  }
}
