import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {
  @Input() team : any
  @Output() xTeam : EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  passId(id:any){
    console.log("here id child",id);
    this.xTeam.emit(id)
  }
}
