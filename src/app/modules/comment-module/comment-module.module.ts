import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModuleRoutingModule } from './comment-module-routing.module';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentComponent} from './components/comment/comment.component';


@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentModuleRoutingModule
  ]
})
export class CommentModuleModule { }
