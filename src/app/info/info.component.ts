import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info:any[] = [["Class","3",""],["Lvl","1",0],["Background","4",""],["Player name","4",""],["Race","4",""],["Alignment","4",""],["Experience","4",0]];

  constructor(){}

  ngOnInit() {
  }

}
