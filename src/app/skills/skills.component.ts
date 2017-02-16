import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private modifierService:ModifierService) { }

 public skills:(string|Number|boolean)[][] =
   [["Acrobatics", 0,"Dexterity",false],
    ["Animal Handling", 0,"Wisdom",false],
    ["Arcana",0,"Intelligence",false],
    ["Athletics",0,"Strength",false],
    ["Deception",0, "Charisma",false],
    ["History",0,"Intelligence",false],
    ["Insight",0, "Wisdom",false],
    ["Intimidate",0, "Charisma",false],
    ["Investigation",0,"Intelligence",false],
    ["Medicine",0, "Wisdom",false],
    ["Nature",0,"Intelligence",false],
    ["Perception",0, "Wisdom",false],
    ["Performance",0, "Charisma",false],
    ["Persuasion",0, "Charisma",false],
    ["Religion",0,"Intelligence",false],
    ["Sleight of Hand",0,"Dexterity",false],
    ["Stealth",0,"Dexterity",false],
    ["Survival",0, "Wisdom",false]
  ];


  getSkill(input){
    return this.modifierService.getMod(input[2]);
  }



  ngOnInit() {
  }

}
