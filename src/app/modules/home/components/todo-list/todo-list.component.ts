import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [];

  constructor() {}

  ngOnInit(): void {}

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public setTaskListEmit(event: string) {
    if (event.length > 0) {
      this.taskList.push({ task: event, checked: false });
    }
  }

  public deleteAllTaskList() {
    const c = confirm('Você realmente deseja deletar tudo? ');
    if (c) {
      this.taskList = [];
    }
  }
}
