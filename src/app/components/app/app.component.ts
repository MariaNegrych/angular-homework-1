import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {TodosService} from '../../services/todos/todos.service';
import {UserModel} from '../models/UserModel';
import {PostModel} from '../models/PostModel';
import {TodosModel} from '../models/TodosModel';
import {CommentModel} from '../models/CommentModel';
import {CommentService} from '../../services/comment/comment.service';


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



