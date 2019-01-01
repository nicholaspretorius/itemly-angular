import { Component, Inject, OnInit } from '@angular/core';
import { state } from './shared';
import { TodoService } from './todo.service';
import guid from 'guid';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})

export class AppComponent implements OnInit {

    protected todos;
    protected showDone: boolean = true;

    constructor(
        @Inject(state) state,
        private readonly todoService: TodoService,
    ) {
        // this.todos = state.todos;
        // this.showDone = state.showDone;
    }

    ngOnInit() {
        this.getTodos();
    }

    public getTodos(): void {
        this.todoService.getTodos()
            .subscribe(todos => this.todos = todos);
    }

    public onAddTodo(e) {
        if (e.todo) {
            console.log('e.Todo: ', e.todo);
            //this.todos.push({ id: guid.raw(), text: e.todo, done: false });
            this.todoService.createTodo({ description: e.todo, done: false })
            .subscribe((todo) => this.getTodos());
        }
    }

    public onToggleDone(e) {
        this.showDone = e;
    }
};