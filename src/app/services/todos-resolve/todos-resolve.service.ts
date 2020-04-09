import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodosService} from '../todos/todos.service';

class TodosModel {
  id: any;
  title: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodosResolverService implements Resolve<TodosModel[]> {

  constructor(private todosService: TodosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodosModel[]> {
    return this.todosService.getTodos();
  }
}
