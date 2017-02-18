import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent implements OnInit {

  constructor() { }

  public attacks:string[] = [];
  private attackId = 1;


  removeAttack(item:string){
    for(var x=0; x<this.attacks.length; x++){
      if (this.attacks[x] == item){
        this.attacks.splice(x,1);
      }
    }
  }

  addAttack(){
    this.attacks.push("Language or Prof #" + this.attackId);
    this.attackId++;
  }

  ngOnInit() {
  }

}
