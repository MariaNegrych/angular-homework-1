import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class TodosModel {
  id: any;
  title: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }
  getTodos(): Observable<TodosModel[]> {
    return this.http.get<TodosModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
