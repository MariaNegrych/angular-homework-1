import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { TodosComponent } from './components/todos/todos.component';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolve/user-resolve.service';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolve/post-resolve.service';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import {TodosResolverService} from './services/todos-resolve/todos-resolve.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommentResolverService} from './services/comment-resolve/comment-resolve.service';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { AlbumComponent } from './components/album/album.component';
import {AlbumResolverService} from './services/album-resolver/album-resolver.service';
import {CommentsForPostResolverService} from './services/comments-for-post-resolver/comments-for-post-resolver.service';


const routes: Routes = [
  // locahost:4200/ -> hello component
  {path: '', component: HelloComponent},
  // localhost:4200/users ->all Users Component
  {path: 'users', component: AllUsersComponent, resolve: {allUsers : UserResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent}
    ]},
  // localhost:4200/posts ->all Posts Component
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts : PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsForPostResolverService}}
    ]},
  // localhost:4200/comments ->all Comments Component
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments : CommentResolverService}, children: [
      {path: ':id/post', component: PostComponent}
    ]},
  // localhost:4200/todos ->all Todos Component
  {path: 'todos', component: AllTodosComponent, resolve: {allTodos : TodosResolverService}},
  {path: 'albums', component: AllAlbumsComponent, resolve: {allAlbums: AlbumResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    TodosComponent,
    HelloComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllTodosComponent,
    AllCommentsComponent,
    CommentComponent,
    AllAlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
