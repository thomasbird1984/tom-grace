import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Dependency modules
import { ViewsModule } from './views/views.module';
import { PartialsModule } from './partials/partials.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    PartialsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ]
})
export class AppModule { }
