import {Component, Input, OnInit} from '@angular/core';

class UserModel {
  name: any;
  id: any;
  username: any;
  website: any;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;
  users: any;

  constructor() {
  }

}
