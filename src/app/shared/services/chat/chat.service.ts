import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/pages/private/home/interfaces/MessageI';
import { User } from 'src/app/class/user';
import {AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;

  constructor( private db : AngularFireDatabase) { }

  connect() {
    return new Observable(observer => {
      this.socket = io('https://suanfansocket.loca.lt');
      this.socket.on('connect', () => {
        observer.next();
      })
    })
  }

  getNewMsgs() {
    return new Observable(observer => {
      this.socket.on("newMsg", msg => {
        observer.next(msg);
      });
    });
  }

  sendMsg(msg: MessageI) {
    this.socket.emit('newMsg', msg);
  }

  disconnect() {
    this.socket.disconnect();
  }

  selectedMssg : MessageI;
  MessageList : AngularFireList<any>;


  GetNewMssgList(){
    this.MessageList=this.db.list('chat');
    return this.MessageList;
  }

  createMssg(mssg: MessageI)
  {
    console.log("llegue hasta aqui");
    this.MessageList.push({
      content: mssg.content,
      time: mssg.time,
      isRead: mssg.isRead,
      owner: mssg.owner,
      isMe: mssg.isMe
    })
  }

  UpdateUser(mssg : MessageI)
  {
    this.MessageList.update(mssg.$messageKey,{
      isRead: mssg.isRead
    });
  }
}
