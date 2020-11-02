import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { MessageI } from '../../interfaces/MessageI';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  @Input() title: string = ""
  @Input() icon: string = ""
  @Input() msgs: Array<MessageI> = []

  msg: string;

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }
  date: Date;
  
  sendMsg() {
    this.date = new Date();
    const msg: MessageI = {
      content: this.msg,
      isMe: true,
      time: this.date.getHours()+":"+this.date.getMinutes(),
      isRead: false,
      owner: JSON.parse(window.localStorage.getItem('user'))[0].$userKey
    }
    // console.log(JSON.parse(window.localStorage.getItem('user'))[0].$userKey);
    this.chatService.sendMsg(msg);
    this.chatService.GetNewMssgList();
    this.chatService.createMssg(msg);
    this.msg = "";
  }
}
