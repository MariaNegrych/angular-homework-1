import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';


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

  tasks = [];

  ngOnInit(): void {
  }

  onSubmit(f: FormGroup) {
    console.log(f.value);
    this.tasks.push(f.value);
    console.log(this.tasks);
  }

  // onReset(f: NgForm) {
  //   f.value = null;
  // }
}
