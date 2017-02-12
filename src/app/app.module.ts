import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WeatherService } from './weather/weather.service';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import {MaterialModule} from "@angular/material";
import { SavingComponent } from './saving/saving.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoComponent,
    SavingComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
