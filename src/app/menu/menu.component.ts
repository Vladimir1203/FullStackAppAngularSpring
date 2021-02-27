import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLogged : boolean = false;

  constructor(public hard : HardcodedAuthentificationService) { }

  ngOnInit(): void {
    //this.isUserLogged = this.hard.isUserLoggedIn();
  }

}
