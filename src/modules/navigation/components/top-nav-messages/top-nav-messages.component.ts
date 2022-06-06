import { Component, OnInit } from '@angular/core';
import * as dataServices from '@modules/data/services';
// import { MessagesService } from '@modules/data/services';


@Component({
  selector: 'app-top-nav-messages',
  templateUrl: './top-nav-messages.component.html',
  styleUrls: ['./top-nav-messages.component.scss']
})
export class TopNavMessagesComponent implements OnInit {
  countMessages: number = 0;

  constructor(public messagesService: dataServices.MessagesService) { }

  ngOnInit(): void {
    this.messagesService.messages$.subscribe(
      (result) => {
        this.countMessages = result.length;
      }
    );
  }

}
