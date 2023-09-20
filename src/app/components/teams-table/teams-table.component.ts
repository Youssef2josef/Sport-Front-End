import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab:any;

  constructor(private router:Router,private teamService:TeamService) { }

  ngOnInit() {
    this.getAllTeams();
  }

  goToEdit(id){
    this.router.navigate(["editTeam/"+id])
  }
    
  goToDipslay(id){
    this.router.navigate(["displayTeam/"+id])
  }

  goToAdd(){
    this.router.navigate(["addTeam/"])
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teamsTab = data;
        console.log("x");
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  deleteTeam(id:any){
    for (let i = 0; i < this.teamsTab.length; i++) {
    if (this.teamsTab[i].id===id) {
    this.teamsTab.splice(i,1)
    }      
    }
    localStorage.setItem("teams",JSON.stringify(this.teamsTab))
    this.getAllTeams()
  }

}
