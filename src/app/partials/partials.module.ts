import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { PartyComponent } from './party/party.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountdownComponent,
    PartyComponent,
  ],
  exports: [
    CountdownComponent,
    PartyComponent
  ]
})
export class PartialsModule { }
