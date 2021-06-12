import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'password': ['', Validators.required],
      'dateOfBirth': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  Register() {
    this.router.navigateByUrl('/login');

  }
}
