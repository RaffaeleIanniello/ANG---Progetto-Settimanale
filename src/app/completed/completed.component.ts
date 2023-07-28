
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: any[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  loadCompletedTodos(): void {
    this.todosService.getTodos().then((todos) => {
      this.completedTodos = todos.filter((todo) => todo.completed);
    });
  }
}