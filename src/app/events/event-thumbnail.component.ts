import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.name}}</div>
        <div [ngStyle]= "getStartTimeStyle()"
            [ngSwitch] ="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'"> (Early Start) </span>
            <span *ngSwitchCase="'10:00 am'"> (Late Start) </span>
            <span *ngSwitchDefault> (Normal Start) </span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div> 
    `,

    // *ngIf= is used to have if conditions in our Angular code, in this case its used to hide an event property 
    // (online or location) if its empty
    // *ngSwitch works the same as your run of the mill switch statement
    /*  ngClass allows you to apply multiple syles for an element, the values are
        boolean expressions of whether or not to display the CSS class
    */
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left {margin-left: 10px; }
        .well div {color: #bbb; }
    `]
})

export class EventThumbnailComponent {
   @Input() event: any;

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'};
        }
        return{};
   }
}
