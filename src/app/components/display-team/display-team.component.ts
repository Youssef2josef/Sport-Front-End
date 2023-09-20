import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  title="Display Team"
  id:any;
  findedTeam:any;
  srcStaduim: string;
  srcLogo: string;
  constructor(private activatedRoute:ActivatedRoute,private teamService:TeamService) { }
  ngOnInit() {
    //get id from path
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe((res)=>{
     this.findedTeam=res;
    })
    this.srcLogo = "assets/images/" + this.findedTeam.logo;
    this.srcStaduim = "assets/images/" + this.findedTeam.staduimImg;
 }
}
