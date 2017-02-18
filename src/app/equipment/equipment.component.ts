import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  public equipment:string[] = [];
  private attackId = 1;


  removeEquipment(item:string){
    for(var x=0; x<this.equipment.length; x++){
      if (this.equipment[x] == item){
        this.equipment.splice(x,1);
      }
    }
  }

  addEquipment(){
    this.equipment.push("Equipment #" + this.attackId);
    this.attackId++;
  }


  ngOnInit() {
  }

}
