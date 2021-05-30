import { Component, OnInit } from '@angular/core';
import {
  faEnvelopeOpenText,
  faUser,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userName = '';
  message = '';
  messageList: { message: string; userName: string; mine: boolean }[] = [];
  userList: string[] = [];
  socket: any;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faHouseUser = faHouseUser;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}
  userNameUpdate(name: string): void {
    this.userName = name;
  }
}
