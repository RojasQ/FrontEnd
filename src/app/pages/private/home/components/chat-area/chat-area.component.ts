import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewChecked, Output } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { HomeComponent } from '../../home.component';
import { MessageI } from '../../interfaces/MessageI';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit, AfterViewChecked {

  @Input() title: string = ""
  @Input() icon: string = ""
  @Input() msgs: Array<MessageI> = []
  @ViewChild('chat') private myScrollContainer: ElementRef;

  msg: string;
  maxMsg:number = 24;

  constructor(public chatService: ChatService, ) {
    // chatService.connect();
   }

  element:HTMLElement;
  scrolled:boolean=false;
  newmessage:boolean=true;
  

  ngOnInit(): void {
    this.element= document.getElementById("chat") as HTMLElement;
    this.scrollToBottom();
    this.element.addEventListener("scroll",(e)=>this.scrolled=true);
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
    this.newmessage=true;
    console.log("esto no deberia imprimir");
    // this.scrollToBottom();
  }

  ngAfterViewChecked() {      
    if(!this.scrolled && this.newmessage){
      this.scrollToBottom();   
      this.newmessage=false;
    }  
    this.loadMoreContent();
    // console.log("que tanto scroll tiene? "+this.myScrollContainer.nativeElement.scrollTop);   
  } 
  loadMoreContent() {
    if(this.myScrollContainer.nativeElement.scrollTop== 0){
      this.maxMsg+=25;
    }
  }

  NumberMesages():number{
   return this.maxMsg;
  }


  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }   
    // console.log("que tanto scroll tiene? "+this.myScrollContainer.nativeElement.scrollHeight);               
    }
  
}
