import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-throws',
  templateUrl: './throws.component.html',
  styleUrls: ['./throws.component.css']
})
export class ThrowsComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

  public throws:any[][] = [["Strength",false], ["Dexterity",false],["Constitution",false],["Intelligence",false],["Wisdom",false],["Charisma",false]];
  ngOnInit() {
  }

}
