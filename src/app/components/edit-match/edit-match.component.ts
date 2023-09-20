import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  title="Edit Match"
  id:any;
  findedMatch:any;
  editMatchForm !:FormGroup
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchService,private router:Router) { }

  ngOnInit() {
    //get id from path
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe((res)=>{
      this.findedMatch=res;
    })
    
  }
  editMatch(){
    this.matchService.editMatch(this.findedMatch).subscribe((res)=>{
      console.log("here res after edit",res);
    })
    this.router.navigate(["/dashboard"]);
  }

}