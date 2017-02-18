import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-secondaries',
  templateUrl: './secondaries.component.html',
  styleUrls: ['./secondaries.component.css']
})
export class SecondariesComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

  AC:number = 10 + this.modifierService.getMod("Dexterity");
  initiative:number = 10 + this.modifierService.getMod("Dexterity");
  speed:number = 10 + this.modifierService.getMod("Dexterity");




  ngOnInit() {
  }

}
