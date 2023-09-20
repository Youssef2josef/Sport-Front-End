import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab:any=[];
  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe((res) => {
      this.playersTab = res;
    })   
  }
  goToEdit(id){
    this.router.navigate(["editPlayer/"+id])
  } 
  goToDipslay(id){
      this.router.navigate(["displayPlayer/"+id])
  }
  goToAdd(){
    this.router.navigate(["addPlayer/"])
  }
  deletePlayer(id:any){
    this.playerService.deletePlayerById(id).subscribe((res)=>{
      console.log("here res after delete ", res);
    })
    this.playerService.getAllPlayers().subscribe((res) => {
      this.playersTab = res;
    }) 
  }
}
