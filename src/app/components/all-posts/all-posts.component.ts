import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../models/PostModel';
import {PostService} from '../../services/post/post.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // get all posts from resolver
    console.log(this.activatedRoute.snapshot.data);
    this.posts = this.activatedRoute.snapshot.data.allPosts;

     // render post of user from post-service
    this.activatedRoute.params   // /users/:id/posts
      .subscribe(value => {
        if (!!value.id){
          this.postService.getPostOfUser(value.id).subscribe(posts => {
            this.posts = posts;
          });
        }
      });
  }

  ngOnInit() {
  }
}
