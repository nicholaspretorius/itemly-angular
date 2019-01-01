import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private readonly http: HttpClient) { }

  getTodos(): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3000/todos');
  }

  getTodoById(id: number) {
    return this.http.get(`http://localhost:3000/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    console.log("Todo: ", todo);
    return this.http.post<Todo>('http://localhost:3000/todos', todo, this.httpOptions);
  }
}
