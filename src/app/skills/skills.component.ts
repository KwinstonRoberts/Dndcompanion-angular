import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private modifierService:ModifierService) { }

 public skills:(string|Number)[][] =
   [["Acrobatics", 0,"Dexterity"],
    ["Animal Handling", 0,"Wisdom"],
    ["Arcana",0,"Intelligence"],
    ["Athletics",0,"Strength"],
    ["Deception",0, "Charisma"],
    ["History",0,"Intelligence"],
    ["Insight",0, "Wisdom"],
    ["Intimidate",0, "Charisma"],
    ["Investigation",0,"Intelligence"],
    ["Medicine",0, "Wisdom"],
    ["Nature",0,"Intelligence"],
    ["Perception",0, "Wisdom"],
    ["Performance",0, "Charisma"],
    ["Persuasion",0, "Charisma"],
    ["Religion",0,"Intelligence"],
    ["Sleight of Hand",0,"Dexterity"],
    ["Stealth",0,"Dexterity"],
    ["Survival",0, "Wisdom"]
  ];


  getSkill(input){
    return this.modifierService.getMod(input[2]);
  }



  ngOnInit() {
  }

}
