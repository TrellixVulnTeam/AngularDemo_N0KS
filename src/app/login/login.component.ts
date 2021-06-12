import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: any;
  constructor(public fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit(): void {
  }
  login() {
    debugger;
    this.loginModel = this.loginForm.value;
    this.router.navigateByUrl('/home');
  }
}
