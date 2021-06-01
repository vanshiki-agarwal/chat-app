import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  onSignIn(): void {
    window.location.assign('/chat');
  }

  ngOnInit(): void {
    const signUpButton: any = document.getElementById('signUp');
    const signInButton: any = document.getElementById('signIn');
    const container: any = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }
}
