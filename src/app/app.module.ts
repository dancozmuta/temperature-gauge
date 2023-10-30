import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaugeComponent } from './gauge/gauge.component';
import { MinMaxIndicatorsComponent } from './min-max-indicators/min-max-indicators.component';
import { CurrentTemperatureIndicatorComponent } from './current-temperature-indicator/current-temperature-indicator.component';
import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    GaugeComponent,
    MinMaxIndicatorsComponent,
    CurrentTemperatureIndicatorComponent,
    CurrentTemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
