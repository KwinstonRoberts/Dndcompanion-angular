import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import {MaterialModule} from "@angular/material";
import { SkillsComponent } from './skills/skills.component';
import {ModifierService} from "./modifier.service";
import { ThrowsComponent } from './throws/throws.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { InspireComponent } from './inspire/inspire.component';
import { LanguagesProfsComponent } from './languages-profs/languages-profs.component';
import {UsersService} from "./users.service";
import { SecondariesComponent } from './secondaries/secondaries.component';
import { HitpointsComponent } from './hitpoints/hitpoints.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoComponent,
    SkillsComponent,
    ThrowsComponent,
    ProficiencyComponent,
    InspireComponent,
    LanguagesProfsComponent,
    SecondariesComponent,
    HitpointsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [UsersService, ModifierService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{
}
