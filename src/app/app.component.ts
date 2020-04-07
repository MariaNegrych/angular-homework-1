import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {TodosService} from './services/todos.service';

class UserModel {
}

class PostModel {
}

class TodosModel {
}

@Component({
  selector: 'app-root',
  template: `<h1>hello {{msg}}!</h1>
  <app-user *ngFor="let u of users" [user]="u"></app-user>
  <app-post *ngFor="let p of posts" [post]="p"></app-post>
  <app-todos *ngFor="let t of todos" [todo]="t"></app-todos>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  msg = 'users';
  users: UserModel[];
  posts: PostModel[];
  todos: TodosModel[];

  constructor(private userService: UserService, private postService: PostService, private todosService: TodosService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.todosService.getTodos().subscribe(value => this.todos = value);
  }


}
