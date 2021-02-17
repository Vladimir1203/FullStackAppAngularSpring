import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vlado1203';
  password = 'vladovlado';
  invalid = false;
  message = "Neuspesno logovanje!";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void{
    if(this.username === "mika" && this.password === "mikic"){
      this.invalid = false;
      this.router.navigate(['welcome', this.username]);
    }else {
      this.invalid = true;
    }

  }

}
