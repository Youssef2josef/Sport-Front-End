import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: any
  @Output() newTeam : EventEmitter<any>=new EventEmitter
  srcLogo:string;
  srcStaduim:string;  
  constructor() { }

  ngOnInit() {
    this.srcLogo="assets/images/"+this.team.logo;
    this.srcStaduim="assets/images/"+this.team.staduimImg;
    console.log(this.team.logo);
    console.log(this.team.staduimImg);
  }
}
