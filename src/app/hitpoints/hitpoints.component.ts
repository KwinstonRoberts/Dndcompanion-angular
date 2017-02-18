import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

    public hitpoints:number = 11 + this.modifierService.getMod("Constitution");

  ngOnInit() {
  }

}
