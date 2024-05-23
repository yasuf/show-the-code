import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{ greeting }}</h1>
        <button (click)="changeGreeting()">Change Greeting</button>
    `,
    styles: []
    })
    export class AppComponent {
    greeting = 'Hello, World!';

    changeGreeting() {
        this.greeting = 'Hello, Angular!';
    }
}
