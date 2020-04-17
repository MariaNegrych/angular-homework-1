import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../post/post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostOfUserResolverService implements Resolve<PostModel[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    const id = +route.paramMap.get('id');
    // const id = route.queryParamMap.get('idOfUser');
    this.postService.getPostOfUser(id);
    return;
  }
}
