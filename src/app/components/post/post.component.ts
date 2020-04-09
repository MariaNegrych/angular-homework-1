import {Component, Input, OnInit} from '@angular/core';

class PostModel {
  id: any;
  title: any;
  body: any;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: PostModel;
  posts: any;

  constructor() {
  }

}
