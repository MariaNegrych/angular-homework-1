import { Component, Input, OnInit } from '@angular/core';

class TodosModel {
  id: any;
  title: any;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{

  @Input()
  todo: TodosModel;
  todos: any;

  constructor() {
  }

}
