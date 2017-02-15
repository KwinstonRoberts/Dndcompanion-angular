import { Component, OnInit } from '@angular/core';
import {DbService} from "../db.service";
import {ModifierService} from "../modifier.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public info:any[] = [["Class","3",""],["Lvl","2",0],["Background","3",""],["Player name","4",""],["Race","4",""],["Alignment","4",""],["Experience","4",0]];
  level:number = 0;
  constructor(public dbService:DbService, public modifierService:ModifierService){}

  calculate(){
    var tiers = [0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];
    for(var x=0; x<tiers.length; x++) {
      if(this.info[6][2]<tiers[x]){
        this.level = x;
        return;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }


  ngOnInit() {
   var infoData = this.dbService.Create().subscribe(this.callback,this.err);
  }

  callback(data){
    console.log(data);
  }

  err(data){
    console.log(data);
  }

}
