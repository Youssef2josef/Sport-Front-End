import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role:string='';
  addingSectionVisible: boolean =false ; // Initialisez selon votre logique


  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem("auth-user")!=null){
    this.role = JSON.parse(sessionStorage.getItem("auth-user")).roles[0];
    console.log(this.role);
    if(this.role=="ROLE_ADMIN"){
    this.addingSectionVisible=true;
    }
    else{
    this.addingSectionVisible=false;
    } 
  }
  else{
    console.log("Non authentifié");
    
  }
  }

}
