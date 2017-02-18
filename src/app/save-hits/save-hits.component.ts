import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-hits',
  templateUrl: './save-hits.component.html',
  styleUrls: ['./save-hits.component.css']
})
export class SaveHitsComponent implements OnInit {

  successes:boolean[] = [false,false,false];
  failures:boolean[] = [false,false,false];


  constructor() { }

  ngOnInit() {
  }

}
