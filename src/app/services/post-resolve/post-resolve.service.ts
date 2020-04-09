import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from '../post/post.service';

class PostModel {
  id: any;
  title: any;
  body: any;
}


@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {
    return this.postService.getPosts();
  }
}
