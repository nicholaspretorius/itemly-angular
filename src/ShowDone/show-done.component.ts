import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ShowDone',
    template: `<div class="show-completed">
    <label>
        Show completed todos? 
        <input type="checkbox" (change)="toggleDone()" [(ngModel)]="showDone"/>
    </label>
</div>`
})

export class ShowDone {
    public showDone: boolean = true;

    @Output()
    onToggleDoneEvent: EventEmitter<any> = new EventEmitter();

    public toggleDone() {
        console.log('TOGGLE: ', this.showDone);
        this.onToggleDoneEvent.emit(this.showDone);
    }
};