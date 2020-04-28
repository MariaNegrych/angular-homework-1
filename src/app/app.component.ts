import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit{

  // @Input()
  // tasks: TaskModel[];

  tasks = [];

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.tasks.push(f.value);
    console.log(this.tasks);
  }

  // onReset(f: NgForm) {
  //   f.value = null;
  // }
}
