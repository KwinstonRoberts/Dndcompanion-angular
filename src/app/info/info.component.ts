import {Component, OnInit} from '@angular/core';
import {Info}  from './info';
import {ModifierService} from "../modifier.service";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  public basic: Info[];
  public users: any[] = [];
  level: number = 0;
 public basicDetails:any[] = basic[];

  constructor(public usersService: UsersService, public modifierService: ModifierService) {
  }

  calculate() {
    var tiers = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    for (var x = 0; x < tiers.length; x++) {
      if (this.basic[6][2] < tiers[x]) {
        this.level = x;
        return;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.usersService.getAllUsers().then((basics: Info[]) => {
      this.basic = basics.map((basic) => {
        console.log(basic)
        return basic[0];
      });
    });
  }
}
