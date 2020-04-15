import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input()
  post: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params
      .subscribe(value => {
        if (!!value.id ) {
          this.postService.getPosts(value.id).subscribe(value1 => {
            this.post = value1;
          });
        }
      });
  }

  ngOnInit() {
  }

}



