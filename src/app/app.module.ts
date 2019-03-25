import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Dependency modules

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ]
})
export class AppModule { }
