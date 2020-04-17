import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../post/post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostForCommentResolverService implements Resolve<PostModel>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel> | Promise<PostModel> | PostModel {
    const postId = route.queryParamMap.get('postId');
    return this.postService.getPostOfComment(postId);
  }
}
