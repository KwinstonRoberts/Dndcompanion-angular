import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  stats:any[] = [["Strength",0],["Dexterity",0],["Constitution",0],["Wisdom",0], ["Intelligence",0],["Charisma",0]];
  roundStat(input){
    return Math.floor(input);
  }
}
