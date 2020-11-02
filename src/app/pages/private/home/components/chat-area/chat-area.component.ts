import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
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

  constructor(public chatService: ChatService) { }

  element:HTMLElement;
  scrolled:boolean=false;
  

  ngOnInit(): void {
    this.element= document.getElementById("chat") as HTMLElement;
    this.scrollToBottom();
    this.element.addEventListener("scroll",(e)=>this.scrolled=true);
  }



  sendMsg() {
    const msg: MessageI = {
      content: this.msg,
      isMe: true,
      time: "8:58",
      isRead: false,
      owner: this.title
    }
    this.chatService.sendMsg(msg);
    this.msg = "";

  }
  ngAfterViewChecked() {      
    if(!this.scrolled){
      this.scrollToBottom();   
    }  
    // console.log("que tanto scroll tiene? "+this.myScrollContainer.nativeElement.scrollTop);   
  } 

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }   
    // console.log("que tanto scroll tiene? "+this.myScrollContainer.nativeElement.scrollHeight);               
    }
  
}
