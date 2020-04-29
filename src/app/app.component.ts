import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {TaskModel} from '../model';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit{

  // @Input()
  // tasks: TaskModel[];

  f: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.f = formBuilder.group({
      id: '',
      title: '',
      body: '',
      type: ''
    });
  }

  tasks: TaskModel[] = [];

  ngOnInit(): void {
  }

  onSubmit(f: FormGroup) {
    // console.log(f.value);
    // console.log(f);
    this.tasks.push(f.value);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // console.log(this.tasks);
    f.reset(undefined);
  }

  // onReset(f: NgForm) {
  //   f.value = null;
  // }
}
