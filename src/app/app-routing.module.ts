import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/components/hello/hello.component';
import {UserInfoComponent} from './modules/user-module/components/user-info/user-info.component';
import {InfoResolverService} from './modules/user-module/services/user-info-service/info.resolver.service';
import {CanActivateService} from './hello/services/can-activate.service';
import {UserComponent} from './modules/user-module/components/user/user.component';
import {PostComponent} from './modules/post-module/components/post/post.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)},
  {path: 'users', loadChildren: () => import('./modules/user-module/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/post-module/post-module.module').then(m => m.PostModuleModule)},
  {path: 'comments', loadChildren: () => import('./modules/comment-module/comment-module.module').then(m => m.CommentModuleModule)},
  {path: 'todos', loadChildren: () => import('./modules/todos-module/todos-module.module').then(m => m.TodosModuleModule)},
  {path: 'albums', loadChildren: () => import('./modules/album-module/album-module.module').then(m => m.AlbumModuleModule)},

];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
