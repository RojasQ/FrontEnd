import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../class/user';
import {AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  selectedUser : User = new User();
  usuarioList : AngularFireList<any>;

  constructor( private db : AngularFireDatabase) { }

  GetNewList(){
    this.usuarioList=this.db.list('usuario');
    return this.usuarioList;
  }

  // getUser($userkey)
  // {
  //   return 
  // }

  createUser(usuario: User)
  {
    console.log("llegue hasta aqui");
    this.usuarioList.push({
      name: usuario.name,
      lname: usuario.lname,
      email: usuario.email,
      prefix: usuario.prefix,
      phone: usuario.phone,
      password: usuario.password,
      blockedUsers: usuario.blockedUsers,
      connected: usuario.connected,
      onChatWith: usuario.onChatWith,
    })
  }

  UpdateUser(usuario : User)
  {
    this.usuarioList.update(usuario.$userkey,{
      name: usuario.name,
      lname: usuario.lname,
      email: usuario.email,
      icon: usuario.icon,
      prefix: usuario.prefix,
      phone: usuario.phone,
      password: usuario.password
    });
  }

  deleteUser($userkey: string)
  {
    this.usuarioList.remove($userkey);
  }

}
