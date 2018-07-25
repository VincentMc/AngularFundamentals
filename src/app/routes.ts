import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent }, // If path is events go to EventListComponent
    { path: 'events/:id', component: EventDetailsComponent }, // If Path has an id go to EventDetailsComponent
    { path: '', redirectTo: '/events', pathMatch: 'full'} // If path is redirect to the vents path
];
