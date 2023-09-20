import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm !: FormGroup
  team: any = {}
  title='ADD Team'
  fileName: string = '';
  constructor(private router:Router,private teamService:TeamService) { }

  ngOnInit() {
  }

  selectedFileName: string = '';
  selectedFileName1: string = '';

  handleFileInput(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFileName = files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  
  handleFileInput1(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFileName1 = files[0].name;
    } else {
      this.selectedFileName1 = '';
    }
  }


  addTeam() {
    this.team.logo=this.selectedFileName;
    this.team.staduimImg=this.selectedFileName1;
    console.log("here ****",this.team);
    this.teamService.addTeam(this.team).subscribe((res) =>{
      console.log("here response from BE", res);
      this.router.navigate(['/teams']);
    });
    console.log(this.team.logo);
    console.log(this.team.staduimImg);
  }

}
