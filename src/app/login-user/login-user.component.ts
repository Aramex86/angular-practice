import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { PasswordValidator } from './../passwordValodator';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  title = 'Model Driven Forms';

  title2 = 'Implementing Custom Validation';

  /* form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }); */

  form: FormGroup;
  constructor(fb: FormBuilder) {
      this.form = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required,
           PasswordValidator.cannotContainSpace])]
      });

   }

  ngOnInit(): void {}

  login() {
    console.log(this.form.value);
  }

}
