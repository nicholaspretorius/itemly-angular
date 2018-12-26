import { Component, Inject } from '@angular/core';
import { state } from './shared';

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
};