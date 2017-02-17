import {Component, OnInit} from '@angular/core';
import {ModifierService} from "../modifier.service";
import {UsersService} from "../users.service";
import {User} from "./user";
import {Char} from "./chars";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {



  constructor(public usersService: UsersService, public modifierService: ModifierService) {
  }

  public chars:Char[];
  public users:User[];
  level: number = 0;

  calculate() {
    var tiers = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    for (var x = 0; x < tiers.length; x++) {
      if (this.users[0].experience < tiers[x]) {
        this.level = x;
        return;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }

  ngOnInit() {
    this.usersService.getChar().subscribe((chars:Char[])=>{this.chars = chars});
    this.usersService.getUser("Gustfinger").subscribe((users:User[])=>{
      this.users = users;
      console.log("users:"+this.users[0].experience);
    });
  }
}
