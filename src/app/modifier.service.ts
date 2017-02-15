import { Injectable } from '@angular/core';

@Injectable()
export class ModifierService {
 public modifiers:any =
  {"Strength":0,
  "Dexterity": 0,
  "Constitution": 0,
  "Wisdom":0,
  "Intelligence":0,
  "Charisma":0
};

 checkStat(){
 }

  getMod(input:any){
   return this.modifiers[input];
 }

  modify(input:any){
      this.modifiers[input[0]] = Math.floor((input[1]-10)/2);

  }
}
