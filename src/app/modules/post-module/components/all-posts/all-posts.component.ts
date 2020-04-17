import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../services/post/post.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];
  post: PostModel;


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    console.log(!!this.activatedRoute.snapshot.params.id);

    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute
        .params
        .subscribe(params =>
          this.postService
            .getPostOfUser(params.id)
            .subscribe(postsFromServer => this.posts = postsFromServer));
    } else if (this.activatedRoute.snapshot.params.postId) {
      this.activatedRoute
        .queryParams
        .subscribe(params =>
          this.postService
            .getPostOfComment(params.postId)
            .subscribe(post => this.post = post));
    } else {
      this.activatedRoute.data.subscribe(value => {
        console.log(value.allPosts);
        this.posts = value.allPosts;
      });

    }

  }

  ngOnInit() {
  }
}
