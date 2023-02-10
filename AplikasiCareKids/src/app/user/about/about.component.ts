import { Component } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'Tentang Kami';

  about: any;
  constructor(private aboutData: AboutService) {
    this.aboutData.getAbout().subscribe((res: any) => {
      this.about = res.data;
    });
  }
}