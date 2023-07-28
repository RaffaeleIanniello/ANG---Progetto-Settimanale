
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: any[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
   
  ];

  getTodos(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  addTodo(newTodo: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        newTodo.id = this.todos.length + 1;
        this.todos.push(newTodo);
        resolve();
      }, 2000);
    });
  }

  removeTodo(todoId: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
        resolve();
      }, 2000);
    });
  }

  updateTodo(updatedTodo: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
        }
        resolve();
      }, 2000);
    });
  }
}
