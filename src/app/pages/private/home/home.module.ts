import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InboxChatComponent } from './components/inbox-chat/inbox-chat.component';


@NgModule({
  declarations: [
    HomeComponent,
    InboxChatComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class HomeModule { }
