import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import {MaterialModule} from "@angular/material";
import { SkillsComponent } from './skills/skills.component';
import {DbService} from "./db.service";
import {ModifierService} from "./modifier.service";
import { ThrowsComponent } from './throws/throws.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoComponent,
    SkillsComponent,
    ThrowsComponent,
    ProficiencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [DbService, ModifierService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{
}
