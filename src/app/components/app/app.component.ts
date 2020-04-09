import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {TodosService} from '../../services/todos/todos.service';

class UserModel {
  name: any;
  id: any;
  username: any;
  website: any;
}

class PostModel {
  id: any;
  title: any;
  body: any;
}

class TodosModel {
  id: any;
  title: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  msg = 'users';
  users: UserModel[];
  posts: PostModel[];
  todos: TodosModel[];

  constructor(private userService: UserService,
              private postService: PostService,
              private todosService: TodosService) {
    // constructor(private userService: UserService, private postService: PostService, private todosService: TodosService) {
//   this.userService.getUsers().subscribe(value => this.users = value);
//   this.postService.getPosts().subscribe(value => this.posts = value);
//   this.todosService.getTodos().subscribe(value => this.todos = value);
// }
  }

  ngOnInit(){
    this.getAllUsers();
    this.getAllPosts();
    this.getAllTodos()
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
      .subscribe(value => this.todos = value)
  }
}



