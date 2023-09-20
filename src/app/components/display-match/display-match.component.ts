import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  title="Display Match"
  id:any;
  findedMatch:any;
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchService) { }

  ngOnInit() {
     //get id from path
     this.id=this.activatedRoute.snapshot.paramMap.get("id");
     this.matchService.getMatchById(this.id).subscribe((res)=>{
      this.findedMatch=res;
    })
  }

}
