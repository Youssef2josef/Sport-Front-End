import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../confirmPwd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  signupForm !: FormGroup
  user: any = {}
  title='Sign Up Admin'
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UsersService) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.minLength(3), Validators.required]],
      lastName: ["" ,  [Validators.minLength(3), Validators.required]],
      email: ["" ,  [Validators.email, Validators.required]],
      password: ["",[Validators.minLength(3), Validators.required]],
      cPassword: [""],

    },
    {
      validators:MustMatch("password","cPassword")
    }
    )

  }
  signupAdmin() {


  // Créez un nouvel objet contenant les informations de l'utilisateur
  let admin = {
    firstName: this.signupForm.get('firstName').value,
    lastName: this.signupForm.get('lastName').value,
    email: this.signupForm.get('email').value,
    password: this.signupForm.get('password').value,
    role: ["admin"]
  };
  this.userService.signup(admin).subscribe((data)=>{
    this.router.navigate(["login"]);
  })
  }
}
