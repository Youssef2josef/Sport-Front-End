import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
matches:any=[{
  teamOne:"EST",
  teamTwo:"CA",
  scoreOne:"0",
  scoreTwo:"1"
}]
  constructor() { }

  ngOnInit() {
  }

}
