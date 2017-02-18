import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

    public hitpoints:number;

     getHitpoints(){
      return this.modifierService.getMod("Constitution") + 11;
    }

  ngOnInit() {
  }

}
