import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit, DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  ngOnInit(): void {}

  public deleteItemTaskList(event: number): TaskList[] {
    console.log(this.taskList);
    return this.taskList.splice(event, 1);
  }

  public setEmitTasklist(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteAllTaskList() {
    const confirm = window.confirm(
      'Are you sure you want to delete All tasks:'
    );
    if (confirm) this.taskList = [];
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm(
        'Are you sure you want task is null realy reset task?'
      );

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );

      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
