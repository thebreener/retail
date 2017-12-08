import {Component, OnInit} from '@angular/core';

import {User} from '../_models/user';
import {UserService} from '../_services';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("home");
  }
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
