import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path:'',
    component:MessageComponent,
    pathMatch:'full'
  },
  {
    path:'chat/:id',
    component:ChatComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    MessageComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MessageModule { }
