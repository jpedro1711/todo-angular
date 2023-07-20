import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public setTaskListEmit(event: string) {
    if (event.length > 0) {
      this.taskList.push({ task: event, checked: false });
    }
  }

  public toogleChecked(index: number) {
    this.taskList[index].checked == !this.taskList[index].checked;
  }

  public deleteAllTaskList() {
    const c = confirm('Você realmente deseja deletar tudo? ');
    if (c) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const c = confirm('Você deseja excluir essa task? ela está vazia');
      if (c) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
