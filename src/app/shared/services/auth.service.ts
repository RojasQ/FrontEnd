import { Injectable } from '@angular/core';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor() { }


  isLogged() {
    const user = window.localStorage.getItem('user') || undefined;
    const isLogged = user ? true : false;
    if (isLogged) this.user = JSON.parse(user);
    return isLogged;
  }

  logout() {
    window.localStorage.clear();
    // window.location.href = '';
  }
}
