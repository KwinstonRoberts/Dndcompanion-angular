import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-profs',
  templateUrl: './languages-profs.component.html',
  styleUrls: ['./languages-profs.component.css']
})
export class LanguagesProfsComponent implements OnInit {

  public languageProfs:string[] = [];
  private languageProfId = 1;
  constructor() { }
  removeLanguageProf(item:string){
    for(var x=0; x<this.languageProfs.length; x++){
      if (this.languageProfs[x] == item){
        this.languageProfs.splice(x,1);
      }
    }
  }

  addLanguageProf(){
    this.languageProfs.push("Attack or Spell #" + this.languageProfId);
    this.languageProfId++;
  }
  ngOnInit() {
  }

}
