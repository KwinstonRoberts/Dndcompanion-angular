import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public traits:string[] = [];
  private traitId = 1;

  public ideals:string[] = [];
  private idealId = 1;

  public bonds:string[] = [];
  private bondId = 1;

  public flaws:string[] = [];
  private flawId = 1;


  removeTrait(item:string){
    for(var x=0; x<this.traits.length; x++){
      if (this.traits[x] == item){
        this.traits.splice(x,1);
      }
    }
  }

  addTrait(){
    this.traits.push("trait #" + this.traitId);
    this.traitId++;
  }

  removeIdeal(item:string){
    for(var x=0; x<this.ideals.length; x++){
      if (this.ideals[x] == item){
        this.ideals.splice(x,1);
      }
    }
  }

  addIdeal(){
    this.ideals.push("ideal #" + this.idealId);
    this.idealId++;
  }

  removeBond(item:string){
    for(var x=0; x<this.bonds.length; x++){
      if (this.bonds[x] == item){
        this.bonds.splice(x,1);
      }
    }
  }

  addBond(){
    this.bonds.push("bond #" + this.bondId);
    this.bondId++;
  }

  removeFlaw(item:string){
    for(var x=0; x<this.flaws.length; x++){
      if (this.flaws[x] == item){
        this.flaws.splice(x,1);
      }
    }
  }

  addFlaw(){
    this.flaws.push("flaw #" + this.flawId);
    this.flawId++;
  }

}
