import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-match',
  templateUrl: './delete-match.component.html',
  styleUrls: ['./delete-match.component.css']
})
export class DeleteMatchComponent implements OnInit {
  @Input() match : any
  @Output() xMatch : EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  passId(id:any){
    console.log("here id child",id);
    this.xMatch.emit(id)
  }
}
