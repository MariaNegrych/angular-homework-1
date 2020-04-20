import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve/post-resolve.service';


const routes: Routes = [
  {path: '', component: AllPostsComponent, resolve: {allPosts: PostResolveService}, children: [
      {path: ':id/comments', loadChildren: () => import('../comment-module/comment-module.module').then(m => m.CommentModuleModule)}
    ] },
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }
