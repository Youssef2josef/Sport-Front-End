import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatchs().subscribe((res) => {
      this.matchesTab = res;
    })
  }

  goToEdit(id) {
    this.router.navigate(["editMatch/" + id])
  }
  goToDipslay(id) {
    this.router.navigate(["displayMatch/" + id])
  }
  goToAdd() {
    this.router.navigate(["addMatch/"])
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatchById(id).subscribe((res)=>{
      console.log("here res after delete ", res);
    })
    
  }
}
