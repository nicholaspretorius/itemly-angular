import { Component, Inject } from '@angular/core';
import { state } from './shared';
import guid from 'guid';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})

export class AppComponent {

    protected todos: any[];
    protected showDone: boolean = true;

    constructor(@Inject(state) state) {
        this.todos = state.todos;
        this.showDone = state.showDone;

        console.log('CONSTRUCTOR: ', this.todos, this.showDone);

    }

    public onAddTodo(e) {
        if (e.todo) {
            this.todos.push({ id: guid.raw(), text: e.todo, done: false });
        }
    }

    public onToggleDone(e) {
        this.showDone = e;
    }
};