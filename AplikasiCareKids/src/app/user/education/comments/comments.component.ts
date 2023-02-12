import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// class
import { Comment } from '../../classes/comment';

//service
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'detail-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  CommentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  comment: any;
  constructor(private route: ActivatedRoute, private commentData: EducationService) {
    let article_id = this.route.snapshot.paramMap.get('id');
    article_id && this.commentData.getComment(article_id).subscribe((res: any) => {
      this.comment = res.data;
      console.warn(this.comment);
    });
  }

  ngOnInit() {

  }

  onSubmit(CommentForm: Comment) {
    console.warn(CommentForm);
    let article_id = this.route.snapshot.paramMap.get('id');
    console.warn(article_id);
  }

  // getComment() {
  //   let article_id = this.route.snapshot.paramMap.get('id');
  //   console.warn(article_id);
  //   article_id && this.commentData.getComment(article_id).subscribe((res: any) => {
  //     this.comment = Array.of(res.data);
  //     console.warn(this.comment);
  //   }
  //   );
  // }

}
