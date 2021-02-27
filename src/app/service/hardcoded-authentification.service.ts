import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor() { }

  authenticate(username : string, password : string){
    if(username == "mika" && password == "mikic"){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user ===null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
