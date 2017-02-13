import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import {MaterialModule} from "@angular/material";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule implements OnInit{
    constructor(private http: Http) {}
    ngOnInit(){
       this.http.get('./api/user');
       console.log('init');
  }
}
