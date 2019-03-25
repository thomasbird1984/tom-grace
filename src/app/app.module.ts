import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Dependency modules
import { PartialsModule } from './partials/partials.module';
import { ViewsModule } from './views/views.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    PartialsModule,
    BrowserModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ]
})
export class AppModule { }
