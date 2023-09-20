import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  title:"Matches";
  matches: any = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.getAllMatches();
  }

  getAllMatches() {
    this.matchService.getAllMatchs().subscribe(
      (data) => {
        this.matches = data;
        console.log("x");
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }
  
  deleteMatch(id: any) {
    this.matchService.deleteMatchById(id).subscribe(
      () => {
        // Remove the deleted match from the local array
        this.matches = this.matches.filter((match: any) => match.id !== id);
        console.log('Match deleted successfully');
      },
      (error) => {
        console.error('Error deleting match:', error);
      }
    );
  }
}
