import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './modules/user-module/components/user/user.component';
import { PostComponent } from './modules/post-module/components/post/post.component';
import { TodosComponent } from './modules/todos-module/components/todos/todos.component';
import {HelloComponent} from './hello/hello.component';
import {AllUsersComponent} from './modules/user-module/components/all-users/all-users.component';
import { AllPostsComponent } from './modules/post-module/components/all-posts/all-posts.component';
import { AllTodosComponent } from './modules/todos-module/components/all-todos/all-todos.component';
import { AllCommentsComponent } from './modules/comment-module/components/all-comments/all-comments.component';
import { CommentComponent } from './modules/comment-module/components/comment/comment.component';
import { AllAlbumsComponent } from './modules/album-module/components/all-albums/all-albums.component';
import { AlbumComponent } from './modules/album-module/components/album/album.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './modules/user-module/user.module';
import {PostModuleModule} from './modules/post-module/post-module.module';
import {CommentModuleModule} from './modules/comment-module/comment-module.module';
import {AlbumModuleModule} from './modules/album-module/album-module.module';
import {TodosModuleModule} from './modules/todos-module/todos-module.module';


// const routes: Routes = [
//   // locahost:4200/ -> hello component
//   {path: '', component: HelloComponent},
//   // localhost:4200/users ->all Users Component
//   {path: 'users', component: AllUsersComponent, resolve: {allUsers : UserResolverService}, children: [
//       {path: ':id/posts', component: AllPostsComponent, resolve: {post: PostOfUserResolverService}}
//     ]},
//   // localhost:4200/posts ->all Posts Component
//   {path: 'posts', component: AllPostsComponent, resolve: {allPosts : PostResolverService}, children: [
//       {path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsForPostResolverService}}
//     ]},
//   // localhost:4200/comments ->all Comments Component
//   {path: 'comments', component: AllCommentsComponent, resolve: {allComments : CommentResolverService}, children: [
//       {path: ':id/post', component: PostComponent, resolve: {post: PostForCommentResolverService}}
//     ]},
//   // localhost:4200/todos ->all Todos Component
//   {path: 'todos', component: AllTodosComponent, resolve: {allTodos : TodosResolverService}},
//   {path: 'albums', component: AllAlbumsComponent, resolve: {allAlbums: AlbumResolverService}}
// ];

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // PostComponent,
    // TodosComponent,
    HelloComponent,
    // AllUsersComponent,
    // AllPostsComponent,
    // AllTodosComponent,
    // AllCommentsComponent,
    // CommentComponent,
    // AllAlbumsComponent,
    // AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // UserModule,
    // PostModuleModule,
    // CommentModuleModule,
    // AlbumModuleModule,
    // TodosModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
