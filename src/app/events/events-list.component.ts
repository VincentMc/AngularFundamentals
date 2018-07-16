import { Component } from '@angular/core';


@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <event-thumbnail [event]="event1">
            </event-thumbnail>
        </div>
    `
    // When we add [] to our html tag it means that it expects an object to be passed to it
    /* Using a URL that points to a HTML file is better when the
                                                amount of HTML being put into the template gets too large */
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Vicents Angular Event',
        date: '09/26/2018',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };
}
