import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@modules/data/models';

@Component({
  selector: 'app-top-nav-messages-item',
  templateUrl: './top-nav-messages-item.component.html',
  styleUrls: ['./top-nav-messages-item.component.scss']
})
export class TopNavMessagesItemComponent implements OnInit {
  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
