import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  title = "Edit Team"
  id: any;
  findedTeam: any;
  editTeamForm !: FormGroup
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    //get id from path
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe((res) => {
      this.findedTeam = res;
    })

  }
  selectedFileName: string ;
  selectedFileName1: string ;

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
  editMatch() {
    if(!(this.selectedFileName1 == '')){
      this.findedTeam.staduimImg = this.selectedFileName1;
    }
    else{
      this.findedTeam.staduimImg = this.findedTeam.staduimImg;
    }
    if(!(this.selectedFileName == '')){
      this.findedTeam.logo = this.selectedFileName;
    }
    else{
      this.findedTeam.logo = this.findedTeam.logo;
    }
    console.log("here ****", this.findedTeam);
    this.teamService.editTeam(this.findedTeam).subscribe((res) => {
      console.log("here res after edit", res);
    })
    this.router.navigate(["/dashboard"]);
  }
}