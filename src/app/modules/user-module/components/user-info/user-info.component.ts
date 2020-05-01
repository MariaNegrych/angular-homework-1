import {Component, Input, OnInit} from '@angular/core';
import {UserModule} from '../../user.module';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
     // this.activatedRoute.data.subscribe(value => this.user = value);
    //  this.user = this.activatedRoute.snapshot.data.userInfo;
    this.activatedRoute.data.subscribe(value => {
      this.user = value.userInfo as UserModel;
    });
  }

  ngOnInit(): void {
  }

}
