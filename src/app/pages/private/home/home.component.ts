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
  currentChat:ChatI={
    $chatKey:"",
    title:"",
    icon:"",
    msgPreview:"",
    isRead:true,
    lastMsg:"",
    msgs:[],
    chatMembers:[],
    isGroup:false,
    chatAdmins:[],
  };
  owner=JSON.parse(window.localStorage.getItem('user')).$userKey;
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
          console.log(x as ChatI);
        }
      });
      // console.log(this.chats);
    });
    if((document.getElementById('profilePic') as HTMLImageElement).attributes[2].value === ''){
      let user: User = (JSON.parse(window.localStorage.getItem('user'))[0] as User);
      (document.getElementById('profilePic') as HTMLImageElement).attributes[2].value = user.icon;
    };
    this.getValueWithAsync();
    this.initChat(0);
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
        
        // console.log(element.email+" y "+element.phone+" y "+contact);
        if ((element.email == contact) || (element.phone == parseInt(contact))){
          console.log(element.email+" y "+element.phone+" y "+contact);
          this.emptyChat = {
            title: element.name,
            icon: element.icon,
            isRead: false,
            msgPreview: 'Saluda a '+element.name,
            lastMsg: '',
            msgs: [{content: "prueba?", isRead:true, isMe:true, time:"7:25"} as MessageI,
            {content: "prueba2?", isRead:true, isMe:false, time:"7:25"} as MessageI],
            chatMembers: [JSON.parse(window.localStorage.getItem('user'))[0].name, element.name],
            isGroup: false,
            chatAdmins: null
          };

          this.chatService.GetNewChatList();
          this.chatService.createChat(this.emptyChat);
        }else{
          //aqui se saca una alerta de que el contacto no existe o se hizo el input mal//
          console.log("El contacto no existe en la base de datos");
        };

      });

    });
    
    this.closeModal();
    
  }

  initChat(index: number) {

    
    
    console.log(index)
    if (this.chats.length > 0) {
      this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
        console.log("Nos conectamos");
        this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
          msg.isMe = this.currentChat.title === msg.owner ? false : true;
          this.currentChat.msgs.push(msg);
        });
      });
      this.currentChat.$chatKey=this.chats[index].$chatKey;
      this.currentChat.title=this.chats[index].title;
      this.currentChat.icon=this.chats[index].icon;
      this.currentChat.msgPreview=this.chats[index].msgPreview;
      this.currentChat.isRead=this.chats[index].isRead;
      this.currentChat.lastMsg=this.chats[index].lastMsg;
      // this.currentChat.msgs=[];
      console.log("chats[indes].msgs:");
      console.log(this.chats[index].msgs);
      this.currentChat.msgs=Object.values(this.chats[index].msgs);

      console.log(Object.values(this.chats[index].msgs));

      // for(const msg in this.chats[index].msgs){
      //   this.currentChat.msgs.push(JSON.parse(msg) as MessageI);
      //   console.log(msg)
      // }

      // this.chats[index].msgs.forEach(element => {
      //   console.log(element);
      //   this.currentChat.msgs.push(element as MessageI);
      // });

      // this.chats[index].msgs.map(e=>{
      //   this.currentChat.msgs.push(e as MessageI);
      // })

      // for(msg of this.chats[index].msgs)
      // this.currentChat.chatMembers=this.chats[index].chatMembers;
      this.currentChat.isGroup=this.chats[index].isGroup;
      // this.currentChat.chatAdmins=this.chats[index].chatAdmins;
    }

    

    console.log("current chat messages: ");
    console.log(JSON.parse(JSON.stringify(this.currentChat.msgs)));
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
        console.log(this.base64);
      }
    })
    // console.log(this.base64);
  }

  addProfilePic(){
    console.log(this.base64);
    // console.log(JSON.parse(window.localStorage.getItem('user'))[0]);
    let user: User = (JSON.parse(window.localStorage.getItem('user'))[0] as User);
    console.log((document.getElementById('profilePicInput') as HTMLInputElement).src);
    console.log(user);
    if((document.getElementById('newEmailInput') as HTMLInputElement).value != ''){
      user.email = (document.getElementById('newPhoneInput') as HTMLInputElement).value;
    };
    if((document.getElementById('newPhoneInput') as HTMLInputElement).value != ''){
      user.phone = parseInt((document.getElementById('newPhoneInput') as HTMLInputElement).value);
    };
    
    // if((document.getElementById('profilePicInput') as HTMLInputElement).src != ''){
      // console.log((document.getElementById('profilePicInput') as HTMLInputElement));
      console.log('entré al icono');
      user.icon = this.base64;
    // };
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
    this.initChat(index);
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
