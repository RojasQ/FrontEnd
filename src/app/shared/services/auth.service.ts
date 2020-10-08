import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserI | undefined;

  constructor() { }

  login(user: UserI) {
    const passKey = "suanfanzon";
    if (user.password === passKey) {
      this.user = user;
      window.localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  isLogged() {
    return window.localStorage.getItem('user') ? true : false;
  }

  logout() {
    window.localStorage.clear();
  }
}
