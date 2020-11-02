import { Component, OnDestroy, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { User } from 'src/app/class/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { ChatI } from './interfaces/ChatI';
import { MessageI } from './interfaces/MessageI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscriptionList: {
    connection: Subscription,
    msgs: Subscription
  } = {
      connection: undefined,
      msgs: undefined
  };
  emptyChat: ChatI;
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
      ],
      chatMembers:[JSON.parse(window.localStorage.getItem('user')), ],
      isGroup: false
    },
  ];

  currentChat = {
    title: "",
    icon: "",
    msgs: []
  };

  constructor(public authService: AuthService, public chatService: ChatService, public userService: UserServiceService) {}
  userList: User[];
  chatList: ChatI[];

  ngOnInit(): void {
    this.initChat();
    this.chatService.GetNewChatList().snapshotChanges().subscribe(item =>{
      this.chatList = [];
      this.chats = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$messageKey"] = element.key;
        // console.log(x["chatMembers"][0]);
        if(x["chatMembers"][0]===JSON.parse(window.localStorage.getItem('user'))[0].name){
          this.chats.push(x as ChatI);
        }
      });
    });
  };

  ngOnDestroy(): void {
    this.destroySubscriptionList();
    this.chatService.disconnect();
  }

  openModal()
  {
    document.getElementById('modalContacto').className += ' is-active';
  }

  closeModal()
  {
    document.getElementById('modalContacto').className = 'modal';
  }

  addChat()
  {
    let contact = (document.getElementById("contactInput") as HTMLInputElement).value;
    this.userService.GetNewList().snapshotChanges().subscribe(item =>{
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$userKey"] = element.key;
        this.userList.push(x as User);
        
      });
      console.log(this.userList);
      this.userList.forEach(element => {
        
        if ((element.email === contact) || (element.phone === parseInt(contact))){
          this.emptyChat = {
            title: element.name,
            icon: '',
            isRead: false,
            msgPreview: 'Saluda a '+element.name,
            lastMsg: '',
            msgs: [],
            chatMembers: [JSON.parse(window.localStorage.getItem('user'))[0].name, element.name],
            isGroup: false,
            chatAdmins: null
          };

          this.chatService.GetNewChatList();
          this.chatService.createChat(this.emptyChat);
        };

        

      });

    });
    

    this.closeModal();
    
  }

  initChat() {
    if (this.chats.length > 0) {
      this.currentChat.title = this.chats[0].title;
      this.currentChat.icon = this.chats[0].icon;
      this.currentChat.msgs = this.chats[0].msgs;
    }
    this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
      console.log("Nos conectamos");
      this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
        msg.isMe = this.currentChat.title === msg.owner ? true : false;
        this.currentChat.msgs.push(msg);
      });
    });
  }

  onSelectInbox(index: number) {
    this.currentChat.title = this.chats[index].title;
      this.currentChat.icon = this.chats[index].icon;
      this.currentChat.msgs = this.chats[index].msgs;
  }

  doLogout() {
    this.authService.logout();
  }

  destroySubscriptionList(exceptList: string[] = []): void {
    for (const key of Object.keys(this.subscriptionList)) {
      if (this.subscriptionList[key] && exceptList.indexOf(key) === -1) {
        this.subscriptionList[key].unsubscribe();
      }
    }
  }

}
