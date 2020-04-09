import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

class UserModel {
  name: any;
  id: any;
  username: any;
  website: any;
}

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModel[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {
    return this.userService.getUsers();
  }
}
