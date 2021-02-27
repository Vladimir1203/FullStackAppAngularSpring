import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

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

  constructor(private router : Router, private hardcodedAut : HardcodedAuthentificationService) { }

  ngOnInit(): void {
  }

  handleLogin(): void{
    if(this.hardcodedAut.authenticate(this.username, this.password)){
      this.invalid = false;
      this.router.navigate(['welcome', this.username]);
    }else {
      this.invalid = true;
    }

  }

}
