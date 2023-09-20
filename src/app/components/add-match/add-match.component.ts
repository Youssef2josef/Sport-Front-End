import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm !: FormGroup
  match: any = {}
  title='ADD Match'
  constructor(private router: Router,private matchService:MatchService) { }

  ngOnInit(): void {
  }
  addMatch() {
    console.log("here ****",this.match);
    this.matchService.addMatch(this.match).subscribe((res) =>{
      console.log("here response from BE", res);
      this.router.navigate(['/matches']);
    });
  }
}
