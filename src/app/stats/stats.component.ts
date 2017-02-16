import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  constructor(public modifier:ModifierService){}
  public stats:any[] = [["Strength",0],["Dexterity",0],["Constitution",0],["Intelligence",0], ["Wisdom",0],["Charisma",0]];
}
