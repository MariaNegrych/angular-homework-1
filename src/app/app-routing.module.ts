import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';


const routes: Routes = [
  // locahost:4200/ -> hello component
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./modules/user-module/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/post-module/post-module.module').then(m => m.PostModuleModule)},
  {path: 'comments', loadChildren: () => import('./modules/comment-module/comment-module.module').then(m => m.CommentModuleModule)},
  {path: 'todos', loadChildren: () => import('./modules/todos-module/todos-module.module').then(m => m.TodosModuleModule)},
  {path: 'albums', loadChildren: () => import('./modules/album-module/album-module.module').then(m => m.AlbumModuleModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
