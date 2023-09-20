import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup
  user: any = {}
  title='Sign Up'
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
  signup() {

  // Créez un nouvel objet contenant les informations de l'utilisateur
  let newUser = {
    firstName: this.signupForm.get('firstName').value,
    lastName: this.signupForm.get('lastName').value,
    email: this.signupForm.get('email').value,
    password: this.signupForm.get('password').value,
    role: ["client"]
  };
  this.userService.signup(newUser).subscribe((data)=>{
    this.router.navigate(["login"]);
  })
  }
}
