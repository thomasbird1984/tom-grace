import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { PartyComponent } from './party/party.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicListItemComponent } from './music-list-item/music-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountdownComponent,
    PartyComponent,
    MusicListComponent,
    MusicListItemComponent,
  ],
  exports: [
    CountdownComponent,
    PartyComponent,
    MusicListComponent,
    MusicListItemComponent,
  ]
})
export class PartialsModule { }
