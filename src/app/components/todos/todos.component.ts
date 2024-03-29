import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];

  inputTodo: string = '';

  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((value, index) => {
      if (index === id) value.completed = !value.completed;
      return value;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
