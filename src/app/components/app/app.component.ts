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
  users: UserModel[];
  posts: PostModel[];
  todos: TodosModel[];
  comments: CommentModel[];

  constructor(private userService: UserService,
              private postService: PostService,
              private todosService: TodosService,
              private commentService: CommentService) {
    // constructor(private userService: UserService, private postService: PostService, private todosService: TodosService) {
//   this.userService.getUsers().subscribe(value => this.users = value);
//   this.postService.getPosts().subscribe(value => this.posts = value);
//   this.todosService.getTodos().subscribe(value => this.todos = value);
// }
  }

  ngOnInit(){
    this.getAllUsers();
    this.getAllPosts();
    this.getAllTodos();
    this.getAllComments();
  }

  getAllUsers() {
    this.userService.getUsers()
      .subscribe(value =>  this.users = value);
  }

   getAllPosts() {
    this.postService.getPosts()
      .subscribe(value => this.posts = value);
  }

  getAllTodos() {
    this.todosService.getTodos()
      .subscribe(value => this.todos = value);
  }

  getAllComments() {
    this.commentService.getComments()
      .subscribe(value => this.comments = value);
  }
}



