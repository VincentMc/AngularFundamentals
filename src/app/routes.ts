import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} }, // If path is events go to EventListComponent
    { path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}, // If path is redirect to the vents path
    { path: 'user', loadChildren: './user/user.module#UserModule'}
];
