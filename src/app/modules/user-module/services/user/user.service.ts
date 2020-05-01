import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../../../models/UserModel';
import {Params} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: Params): Observable<UserModel>{
    return this.http.get<UserModel>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }

}
