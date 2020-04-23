import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  color: string;
  title = 'ngPipes';
  users = [
    {
      name: 'maria',
      age: 24,
      car: 'Audi'
    },
    {
      name: 'ivanna',
      age: 25,
      car: true
    },
    {
      name: 'kolia',
      age: 22,
      car: true
    },
    {
      name: 'zoriana',
      age: 26,
      car: true
    },
    {
      name: 'yura',
      age: 20,
      car: false
    },
    {
      name: 'nazar',
      age: 20,
      car: true
    },
  ];
}
