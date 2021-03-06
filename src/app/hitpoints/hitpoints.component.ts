import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }
    public damage:number = 0;
    public currentHP:number;
    public hitpoints:number;

     setCurrentHP(){
      this.currentHP =  this.getHitpoints() - this.damage;
    }

    getHitpoints(){
      return this.modifierService.getMod("Constitution") + 11;
    }

  ngOnInit() {
      this.setCurrentHP();
  }

}
