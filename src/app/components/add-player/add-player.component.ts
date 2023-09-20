import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm !: FormGroup
  player: any = {}
  title='ADD Player'
  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
  }
  addPlayer() {
    console.log("here ****",this.player);

    this.playerService.addPlayer(this.player).subscribe((res) =>{
      console.log("here response from BE", res);
      this.router.navigate(['/players']);
    });
  }
}
