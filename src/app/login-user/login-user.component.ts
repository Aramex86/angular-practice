import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , /*  FormControl, */ Validators} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  title = 'Model Driven Forms';

  /* form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }); */

  form: FormGroup;
  constructor(fb: FormBuilder) {
      this.form = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

   }

  ngOnInit(): void {}

  login() {
    console.log(this.form.value);
  }

}
