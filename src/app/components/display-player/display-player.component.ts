import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  title="Display Player"
  id:any;
  findedPlayer:any;

  constructor(private activatedRoute:ActivatedRoute,private playerService:PlayerService) { }

  ngOnInit() {
    //get id from path
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    //Get all players from ls
    this.playerService.getPlayerById(this.id).subscribe((res)=>{
      this.findedPlayer=res;
    })
  }

}
