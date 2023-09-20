import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title: "Teams";
  teams: any = [];
  x: any;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getAllTeams()
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data;
        console.log("x");
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }
}

