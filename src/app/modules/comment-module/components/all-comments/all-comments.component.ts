import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../../../models/CommentModel';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    console.log(!!this.activatedRoute.snapshot.params.postId);
    if (this.activatedRoute.snapshot.params.postId) {
      this.activatedRoute
        .params
        .subscribe(params =>
          this.commentService
            .getAllCommentsOfPost(params.postId)
            .subscribe(commentsFromServer => this.comments = commentsFromServer));
    } else {
      this.activatedRoute.data.subscribe(value => {
        console.log(value.allComments);
        this.comments = value.allComments;
      });

    }
  }

  ngOnInit() {
  }

}
