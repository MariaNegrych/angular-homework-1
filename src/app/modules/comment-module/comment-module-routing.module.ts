import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolverService} from './services/comment-resolve/comment-resolve.service';
import {PostComponent} from '../post-module/components/post/post.component';
import {PostForCommentResolverService} from '../post-module/services/post-for-comment-resolver/post-for-comment-resolver.service';
import {CommentsForPostResolverService} from './services/comments-for-post-resolver/comments-for-post-resolver.service';

// const routes: Routes = [
//   // localhost:4200/comments ->all Comments Component
//   {path: '', component: AllCommentsComponent, resolve: {allComments : CommentResolverService},
//
//     children: [{path: ':id/post', component: PostComponent, resolve: {post: PostForCommentResolverService}}]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: AllCommentsComponent, // app.component.html
    resolve: {allComments: CommentResolverService}

  },
  {
    path: ':id/comments',
    component: AllCommentsComponent,
    resolve: {comments: CommentsForPostResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentModuleRoutingModule { }
