import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-6">
                    <event-thumbnail (click) = "handleThumbnailClick(event.name)"
                    [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `

    // *ngFor="let event of events" will loop throuh our events array and display each

    // When we add [] to our html tag it means that it expects an object to be passed to it
    /* Using a URL that points to a HTML file is better when the
                                                amount of HTML being put into the template gets too large */

    // [event] above is referring to the input parameter of our eventThumbnail component
    // #thumbnail is the variable name we gave to our <event-thumbnail> object
})
export class EventsListComponent implements OnInit{
    events: any[];

    constructor(private eventService: EventService, private toastr: ToastrService) {
    }

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
      this.toastr.success(eventName);
    }
}
