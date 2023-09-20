import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  title = "Login"
  isLoginFailed:boolean;
  isLoggedIn:boolean
  u: any;
  roles: any = [];

    constructor(private formBuilder: FormBuilder, 
    private router: Router , 
    private usersService: UsersService ,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(3), Validators.required]],
    })
  }
  login() {
    this.u = this.loginForm.value;
    console.log("here user" , this.u)
    this.usersService.login(this.u).subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);       
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.roles[0]=="ROLE_ADMIN"){
        this.router.navigate(["dashboard"]);
        console.log("admin");
      }
      else{
        this.router.navigate(["dashboardClient"]);
      }
    },
)}

}
