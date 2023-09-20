import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
  @Input() player : any
  @Output() xPlayer : EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  passId(id:any){
    console.log("here id child",id);
    this.xPlayer.emit(id)
  }
}
