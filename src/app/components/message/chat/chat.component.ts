import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Echo from 'laravel-echo';


import { MessageService } from 'src/app/services/message.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [
    {
      from: 1,
      to: 2,
      text: 'hi'
    },
    {
      from: 2,
      to: 1,
      text: 'hi who are you'
    }
  ]
  selectContact: any
  pusher: Echo
  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,

    private router: Router
  ) {


    this.pusher = new Echo({
      broadcaster: 'Pusher',
      key: environment.pusher.key,

      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,

    });
  }

  ngOnInit(): void {
    this.pusher.channel('orders')
    .listen('.Namespace\\Event\\Class', (e:any) => {
        //
    });
    // this.pusher.channel('message1')
    //   .listen('newMessage', (res: any) => {
    //     console.log(res)
    //   })

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.selectContact = (paramMap.get('id')) ? Number(this.activatedRoute.snapshot.paramMap.get('id')) : 0;
      this.messageService.getMessages(this.selectContact).subscribe(
        {
          next: (res: any) => {
            this.messages = res;
          }

        }
      )
    })

  }


}
