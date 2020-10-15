import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ChatI } from './interfaces/ChatI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chats: Array<ChatI> = [
    {
      title: "Santi",
      icon: "/assets/img/ppRightBar.png",
      isRead: true,
      msgPreview: "entonces ando usando fotos reales hahaha",
      lastMsg: "11:13",
      msgs: [
        {content: "Lorem ipsum dolor amet", isRead:true, isMe:true, time:"7:24"},
        {content: "Qué?", isRead:true, isMe:false, time:"7:25"},
      ]
    },
    {
      title: "Pablo Bejarano",
      icon: "/assets/img/ppInbox.png",
      isRead: true,
      msgPreview: "Estrenando componente",
      lastMsg: "18:30",
      msgs: []
    },
    {
      title: "Pablo Bejarano 2",
      icon: "/assets/img/ppInbox.png",
      isRead: true,
      msgPreview: "Nice front 😎",
      lastMsg: "23:30",
      msgs: []
    },
  ];

  currentChat = {
    title: "",
    icon: "",
    msgs: []
  };

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    if (this.chats.length > 0) {
      this.currentChat.title = this.chats[0].title;
      this.currentChat.icon = this.chats[0].icon;
      this.currentChat.msgs = this.chats[0].msgs;
    }
  }

  onSelectInbox(index: number) {
    this.currentChat.title = this.chats[index].title;
      this.currentChat.icon = this.chats[index].icon;
      this.currentChat.msgs = this.chats[index].msgs;
  }

  doLogout() {
    this.authService.logout();
  }

}
