import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpRequestPayload } from '../../../model/signup-request.payload';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpRequestPayload: SignUpRequestPayload;

  constructor(private authService: AuthService) {
    this.signUpRequestPayload = {
      username: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signUp() {
    this.signUpRequestPayload.username = this.signUpForm.get('username').value;
    this.signUpRequestPayload.email = this.signUpForm.get('email').value;
    this.signUpRequestPayload.password = this.signUpForm.get('password').value;

    this.authService.signUp(this.signUpRequestPayload).subscribe(
      (result) => {
        console.log('Signup Successful', result);
      },
      (result) => {
        console.log('Signup Failed', result);
      }
    );
  }
}
