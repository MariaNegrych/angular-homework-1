import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../models/CommentModel';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    // all comments from resolver
    console.log(this.activatedRoute.snapshot.data);
    this.comments = this.activatedRoute.snapshot.data.allComments;

    // comments of single post by postid
    this.activatedRoute.params  // /users/:id/posts
      .subscribe(value => {
        if (!!value.id) {
          this.commentService.getAllCommentsOfPost(value.id).subscribe(value1 => {
            this.comments = value1;
          });
        }
      });
  }

  ngOnInit() {
  }

}
