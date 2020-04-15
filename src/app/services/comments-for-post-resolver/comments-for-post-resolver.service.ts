import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../components/models/CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from '../comment/comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsForPostResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    const postId = route.queryParamMap.get('postId');
    return this.commentService.getAllCommentsOfPost(postId);
  }
}
