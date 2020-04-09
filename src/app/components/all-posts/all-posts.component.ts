import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

class PostModel {
  id: any;
  title: any;
  body: any;
}

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];


  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit() {
  }
}
