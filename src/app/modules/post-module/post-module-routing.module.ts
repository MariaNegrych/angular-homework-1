import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolve/post-resolve.service';
import {AllCommentsComponent} from '../comment-module/components/all-comments/all-comments.component';
import {CommentsForPostResolverService} from '../comment-module/services/comments-for-post-resolver/comments-for-post-resolver.service';
import {PostOfUserResolverService} from './services/post-of-user-resolver/post-of-user-resolver.service';
import {PostComponent} from './components/post/post.component';
import {PostForCommentResolverService} from './services/post-for-comment-resolver/post-for-comment-resolver.service';


// const routes: Routes = [
//   // localhost:4200/posts ->all Posts Component
//   {
//     path: '',
//     component: AllPostsComponent,
//     resolve: {allPosts : PostResolverService},
//     children: [
//       {
//         path: ' ',
//         loadChildren: () => import('../comment-module/comment-module.module').then(m => m.CommentModuleModule)
//       }
//     ]
//     // children: [{path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsForPostResolverService}}]
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent, // app.component.html
    resolve: {allPosts: PostResolverService}

  },

  {
    path: ':id/posts',
    component: AllPostsComponent,
    resolve: {post: PostOfUserResolverService}
  },

  {
    path: ':id/post',
    component: PostComponent,
    resolve: {post: PostForCommentResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }
