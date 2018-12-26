import { Component, Input } from '@angular/core';

@Component({
    selector: 'TodoItem',
    template: `<li class="{{ done ? 'complete' : '' }}">
        {{todo}}
        <input type="checkbox" [(ngModel)]="done"/>
    </li>`
})

export class TodoItem {
    @Input()
    todo: string;

    @Input()
    done: boolean;
};