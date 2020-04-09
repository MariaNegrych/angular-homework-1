import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

class UserModel {
  name: any;
  id: any;
  username: any;
  website: any;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];


  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit() {
  }

}
