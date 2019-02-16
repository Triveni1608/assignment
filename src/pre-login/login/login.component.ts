import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  flag =false;
  patternEmail = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  patternPwd = "^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[!@#\$%\^&\*])(?=[^0-9]*[0-9]).{8,}$"
  loginForm = new FormGroup({
    loginId : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.pattern(this.patternPwd)])
  })

  login(loginForm) {
    localStorage.setItem('loginId', loginForm.value.loginId);
    this.router.navigate(['/home']);
  }
}
