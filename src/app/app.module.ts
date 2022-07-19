import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomeBigAutoComponent } from './some-big-auto/some-big-auto.component';
import { SomeBigAirComponent } from './some-big-air/some-big-air.component';
import { SomeBigShipComponent } from './some-big-ship/some-big-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeBigAutoComponent,
    SomeBigAirComponent,
    SomeBigShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
