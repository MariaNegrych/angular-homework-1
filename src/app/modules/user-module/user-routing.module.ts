import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolve/user-resolve.service';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {PostOfUserResolverService} from '../post-module/services/post-of-user-resolver/post-of-user-resolver.service';


const routes: Routes = [
  // localhost:4200/users ->all Users Component
  {
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    // children: [
    //   // users/
    //   {path: '', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
    //
    // ]
    // children: [{path: ':id/posts', component: AllPostsComponent, resolve: {post: PostOfUserResolverService}}]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
