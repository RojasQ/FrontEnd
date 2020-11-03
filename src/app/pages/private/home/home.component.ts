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
        {content: "asd?", isRead:true, isMe:false, time:"7:25"},
        {content: "sdasdaQué?", isRead:true, isMe:true, time:"7:25"},
        {content: "Qusadfadsfé?", isRead:true, isMe:true, time:"7:25"},
        {content: "Qsdfsfsaué?", isRead:true, isMe:false, time:"7:25"},
        {content: "fasfasfsf?", isRead:true, isMe:true, time:"7:25"},
        {content: "asfsafsaffs?", isRead:true, isMe:false, time:"7:25"},
        {content: "asfsafaf?", isRead:true, isMe:false, time:"7:25"},
        {content: "c?", isRead:true, isMe:false, time:"7:25"},
        {content: "xsbhcjxnasukjcb ska?", isRead:true, isMe:false, time:"7:25"},
        {content: "casbcjubsdjc kjs  jnsj cbjnsai?", isRead:true, isMe:false, time:"7:25"},
        {content: "casbcjbsic?", isRead:true, isMe:true, time:"7:25"},
        {content: "casbcjuasbikcbs?", isRead:true, isMe:true, time:"7:25"},
        {content: "Lorem ipsum dolor amet", isRead:true, isMe:true, time:"7:24"},
        {content: "Qué?", isRead:true, isMe:false, time:"7:25"},
        {content: "asd?", isRead:true, isMe:false, time:"7:25"},
        {content: "sdasdaQué?", isRead:true, isMe:true, time:"7:25"},
        {content: "Qusadfadsfé?", isRead:true, isMe:true, time:"7:25"},
        {content: "Lorem ipsum dolor amet", isRead:true, isMe:true, time:"7:24"},
        {content: "Qué?", isRead:true, isMe:false, time:"7:25"},
        {content: "asd?", isRead:true, isMe:false, time:"7:25"},
        {content: "sdasdaQué?", isRead:true, isMe:true, time:"7:25"},
        {content: "Qusadfadsfé?", isRead:true, isMe:true, time:"7:25"},
        {content: "Qsdfsfsaué?", isRead:true, isMe:false, time:"7:25"},
        {content: "fasfasfsf?", isRead:true, isMe:true, time:"7:25"},
        {content: "asfsafsaffs?", isRead:true, isMe:false, time:"7:25"},
        {content: "asfsafaf?", isRead:true, isMe:false, time:"7:25"},
        {content: "c?", isRead:true, isMe:false, time:"7:25"},
        {content: "xsbhcjxnasukjcb ska?", isRead:true, isMe:false, time:"7:25"},
        {content: "casbcjubsdjc kjs  jnsj cbjnsai?", isRead:true, isMe:false, time:"7:25"},
        {content: "casbcjbsic?", isRead:true, isMe:true, time:"7:25"},
        {content: "casbcjuasbikcbs?", isRead:true, isMe:true, time:"7:25"},
        {content: "Lorem ipsum dolor amet", isRead:true, isMe:true, time:"7:24"},
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
  // chatList: ChatI[];
  base64: string;
  // files: any[];

  ngOnInit(): void {
    this.chatService.GetNewChatList().snapshotChanges().subscribe(item =>{
      // this.chatList = [];
      this.chats = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$chatKey"] = element.key;
        // console.log(x["chatMembers"][0]);
        if(x["chatMembers"][0] === JSON.parse(window.localStorage.getItem('user'))[0].name){
          this.chats.push(x as ChatI);
        }
      });
    });
    if((document.getElementById('profilePic') as HTMLImageElement).attributes[2].value === ''){
      let user: User = (JSON.parse(window.localStorage.getItem('user'))[0] as User);
      (document.getElementById('profilePic') as HTMLImageElement).attributes[2].value = user.icon;
    };
    this.getValueWithAsync();
    this.initChat();
  };

  async getValueWithAsync() {
    const value = <number>await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
  }

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
      // console.log(this.userList);
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
      console.log(this.chats);
      this.currentChat.title = this.chats[0].title;
      this.currentChat.icon = this.chats[0].icon;
      this.currentChat.msgs = this.chats[0].msgs;
    }
    this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
      // console.log("Nos conectamos");
      this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
        msg.isMe = this.currentChat.title === msg.owner ? false : true;
        this.currentChat.msgs.push(msg);
      });
    });
  }

  setProfilePic()
  {
    document.getElementById('modalProfilePic').className += ' is-active';
    (document.getElementById('profilePicInput') as HTMLInputElement).addEventListener('change', (e?: any)=>{
      // console.log(e["srcElement"]["files"][0]);
      const file: any = e["srcElement"]["files"][0];
      const reader = new FileReader;

      if(file){
        reader.addEventListener('load', (e?: any)=>{
          (document.getElementById('profilePic')).setAttribute('src', e["explicitOriginalTarget"]["result"]);
          this.base64 = e["explicitOriginalTarget"]["result"];
        })
        reader.readAsDataURL(file);
      }
    })
    // console.log("foto");
  }

  addProfilePic(){
    let user: User = (JSON.parse(window.localStorage.getItem('user'))[0] as User)
    // console.log(user.icon);
    if((document.getElementById('newEmailInput') as HTMLInputElement).value != ''){
      user.email = (document.getElementById('newPhoneInput') as HTMLInputElement).value;
    };
    if((document.getElementById('newPhoneInput') as HTMLInputElement).value != ''){
      user.phone = parseInt((document.getElementById('newPhoneInput') as HTMLInputElement).value);
    };
    if((document.getElementById('profilePicInput') as HTMLInputElement).src != ''){
      // console.log((document.getElementById('profilePicInput') as HTMLInputElement));
      user.icon = this.base64;
    };
    // console.log(user.icon);
    
    // console.log(user);
    this.userService.GetNewList()
    this.userService.UpdateUser(user);
    this.closeProfile();
  }

  closeProfile()
  {
    document.getElementById('modalProfilePic').className = 'modal';
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
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
