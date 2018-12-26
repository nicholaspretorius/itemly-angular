import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'TodoInput',
    templateUrl: './todo-input.component.html'
})

export class TodoInput {
    public todo: string = "";

    @Output() 
    addTodoEvent: EventEmitter<any> = new EventEmitter<any>();

    public addTodo(e) {
        this.addTodoEvent.emit({ todo: this.todo });
        this.todo = "";
    }
};