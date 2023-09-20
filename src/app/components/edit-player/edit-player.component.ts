import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  title="Edit Player"
  id:any;
  findedPlayer:any;
  editPlayerForm !:FormGroup
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
    //get id from path
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    //Get all players from ls
    this.playerService.getPlayerById(this.id).subscribe((res)=>{
      this.findedPlayer=res;
    })
  }
  editPlayer(){
    this.playerService.editPlayer(this.findedPlayer).subscribe((res)=>{
      console.log("here res after edit",res);
    })
    this.router.navigate(['/players'])
  }

}
