import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/pages/private/home/interfaces/MessageI';
import { User } from 'src/app/class/user';
import {AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';
import { ChatI } from 'src/app/pages/private/home/interfaces/ChatI';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;
  selectedMssg : MessageI;
  selectedChat : ChatI;
  MessageList : AngularFireList<any>;
  ChatList : AngularFireList<any>;
  messagesFromChat : AngularFireList<MessageI>;

  constructor( private db : AngularFireDatabase) { 
    // this.connect();
  }

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

  GetNewMssgList(){
    this.MessageList=this.db.list('message');
    return this.MessageList;
  }

  GetNewChatList(){
    this.ChatList=this.db.list('chat');
    return this.ChatList;
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

  getMsgFromChat(chat: ChatI){
    // temp=this.db.list('message');
    
  }

  createChat(chat: ChatI)
  {
    console.log("llegue hasta aqui");
    this.ChatList.push({
      title: chat.title,
      icon: chat.icon,
      msgPreview: chat.msgPreview,
      isRead: chat.isRead,
      lastMsg: chat.lastMsg,
      msgs: chat.msgs,
      chatMembers: chat.chatMembers,
      isGroup: chat.isGroup,
      chatAdmins: chat.chatAdmins
    })
  }

  UpdateUser(mssg : MessageI)
  {
    this.MessageList.update(mssg.$messageKey,{
      isRead: mssg.isRead
    });
  }

  UpdateChat(chat : ChatI)
  {
    this.ChatList.update(chat.$chatKey,{
      title: chat.title,
      icon: chat.icon,
      msgPreview: chat.msgPreview,
      isRead: chat.isRead,
      lastMsg: chat.lastMsg,
      msgs: chat.msgs,
      chatMembers: chat.chatMembers,
      chatAdmins: chat.chatAdmins
    });
  }
  disconnect() {
    this.socket.disconnect();
  }
}
