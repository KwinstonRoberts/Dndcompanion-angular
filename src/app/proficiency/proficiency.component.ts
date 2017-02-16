import { Component, OnInit } from '@angular/core';
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css']
})
export class ProficiencyComponent implements OnInit {

  constructor(public modifierService:ModifierService) { }

  ngOnInit() {
  }

}
