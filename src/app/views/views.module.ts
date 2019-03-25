import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

// Import dependency modules

// Import the individual views
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';

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
    path: 'registry',
    component: RegistryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
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
