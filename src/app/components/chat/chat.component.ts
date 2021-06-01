import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {}
  userNameUpdate(name: string): void {
    this.userName = name;
  }
}
