import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// class
import { Comment } from '../../classes/comment';

//service
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'detailnews-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  CommentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  alert: boolean = false;
  comment: any;
  constructor(private route: ActivatedRoute, private commentData: NewsService) {
    let article_id = this.route.snapshot.paramMap.get('id');
    article_id && this.commentData.getComment(article_id).subscribe((res: any) => {
      this.comment = res.data;
    });
  }

  ngOnInit() {

  }

  onSubmit(CommentForm: Comment) {
    let article_id = this.route.snapshot.paramMap.get('id');
    console.warn(article_id);
    article_id && this.commentData.postComment(CommentForm, article_id).subscribe((res: any) => {
      this.alert = true;
      this.CommentForm.reset();
    });
  }
  closeAlert() {
    this.alert = false;
  }

}
