import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries = ['USA', 'UK', 'Singapore', 'Australia'];

  model = new User('', '', '');
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

}
