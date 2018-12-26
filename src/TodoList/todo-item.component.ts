import { Component, Input } from '@angular/core';

@Component({
    selector: 'TodoItem',
    template: `<li>
        {{todo}}
        <input type="checkbox" value="{{done}}"/>
    </li>`
})

export class TodoItem {
    @Input()
    todo: string;

    @Input()
    done: boolean;
};