import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../modules/user-module/services/user/user.service';
import {PostService} from '../modules/post-module/services/post/post.service';
import {TodosService} from '../modules/todos-module/services/todos/todos.service';
import {UserModel} from '../models/UserModel';
import {PostModel} from '../models/PostModel';
import {TodosModel} from '../models/TodosModel';
import {CommentModel} from '../models/CommentModel';
import {CommentService} from '../modules/comment-module/services/comment/comment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  msg = 'to my Angular page';

  constructor() {

  }

  ngOnInit(): void {
  }

}



