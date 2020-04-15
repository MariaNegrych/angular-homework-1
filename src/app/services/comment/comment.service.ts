import {Injectable} from '@angular/core';
import {CommentModel} from '../../components/models/CommentModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {
  }
  getComments(): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>(this.API + 'comments');
  }
  getAllCommentsOfPost(id): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>(this.API + `comments?postId=${id}`);
  }
}
