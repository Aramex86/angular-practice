import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from './../passwordValodator';
import {filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  title = 'Model Driven Forms';

  title2 = 'Implementing Custom Validation';

  title3 = 'Observable';

  /* form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }); */

  searchControl = new FormControl();

  form: FormGroup;

  constructor(fb: FormBuilder) {
      this.form = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required,
           PasswordValidator.cannotContainSpace])]
      });

      this.searchControl.valueChanges.pipe(
        filter(text => text.length >= 3),
        debounceTime(4000),
        distinctUntilChanged()
      ).subscribe(value => {console.log(value)});
        


   }

  ngOnInit(): void {}

  login() {
    console.log(this.form.value);
  }



}
