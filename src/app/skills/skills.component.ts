import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any[] = [["Acrobatics"],
    ["Animal Handling",0],
    ["Arcana",0],
    ["Athletics",0],
    ["Deception",0],
    ["History",0],
    ["Insight",0],
    ["Intimidate",0],
    ["Investigation",0],
    ["Medicine",0],
    ["Nature",0],
    ["Perception",0],
    ["Performance",0],
    ["Religion",0],
    ["Sleight of Hand",0],
    ["Stealth",0],
    ["Survival",0]
  ];
  constructor() { }

  ngOnInit() {
  }

}
