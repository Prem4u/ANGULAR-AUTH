import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // genders = ['male', 'female'];
  registerUserData = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
   console.log(this.registerUserData);
   this._auth.registerUser(this.registerUserData).subscribe(
     res => console.log(res),
     err => console.log(err));
 }

}
