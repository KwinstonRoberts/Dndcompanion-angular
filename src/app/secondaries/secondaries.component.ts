import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-secondaries',
  templateUrl: './secondaries.component.html',
  styleUrls: ['./secondaries.component.css']
})
export class SecondariesComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

  public AC:number = 10 + this.modifierService.getMod("Dexterity");
  public initiative:number = 10 + this.modifierService.getMod("Dexterity");
  public speed:number = 10 + this.modifierService.getMod("Dexterity");




  ngOnInit() {
  }

}
