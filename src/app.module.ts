import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { state } from './shared';
import guid from 'guid';
import { TodoList } from './TodoList/todo-list.component';
import { TodoInput } from './TodoInput/todo-input.component';
import { TodoItem } from './TodoList/todo-item.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoList,
        TodoInput,
        TodoItem
    ],
    imports: [
        BrowserModule
    ],
    providers: [{
        provide: state,
        useValue: {
            showDone: true,
            todos: [
                {
                    id: guid.raw(),
                    text: 'Learn React', 
                    done: false
                }, {
                    id: guid.raw(),
                    text: 'Learn Vue', 
                    done: false
                }, {
                    id: guid.raw(),
                    text: 'Learn Angular', 
                    done: true
                }
            ]
        }
    }],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {};