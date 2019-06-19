import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import dependency modules
import { PartialsModule } from '../partials/partials.module';

// Import the individual views
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import {FormsModule} from '@angular/forms';

// route definitions
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'rsvp',
    component: RsvpComponent
  },
  {
    path: 'rsvp/:user_id',
    component: RsvpComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    MusicComponent,
    RsvpComponent,
    RegistryComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ViewsModule {}
