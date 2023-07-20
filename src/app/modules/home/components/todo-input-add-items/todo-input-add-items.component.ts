import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent {
  @Output() public emitTaskListItem = new EventEmitter();

  public addTaskListItem: string = '';

  constructor() {}

  public submitTaskListItem() {
    this.addTaskListItem = this.addTaskListItem.trim();

    this.emitTaskListItem.emit(this.addTaskListItem);
    this.addTaskListItem = '';
  }
}
