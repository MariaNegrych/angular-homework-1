import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.API + 'posts');
  }
  getPostOfUser(id): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(this.API + `posts?userId=${id}`);
  }
  getPostOfComment(postId): Observable<PostModel>{
    return this.http.get<PostModel>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}