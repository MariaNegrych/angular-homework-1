import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];
  xxx: any;


  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    // this.users = this.activatedRoute.snapshot.data.allUsers; or:
    this.activatedRoute.data.subscribe(value => {this.users = value.users as UserModel[];
                                                 console.log(value);
    });
  }

  ngOnInit() {
  }

  catchUserData(user: any) {
    console.log(user);
    this.xxx = user;
  }
}

