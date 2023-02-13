import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//service
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  images: any;
  constructor(private route: ActivatedRoute, private imageList: EducationService) {
    let article_id = this.route.snapshot.paramMap.get('id');
    article_id && this.imageList.getImage(article_id).subscribe((res: any) => {
      this.images = res.data;

      console.log(this.images);
    });
  }

  ngOnInit() {
  }

}
