import { Component, Input, OnInit } from '@angular/core';

//service
import { BerandaService } from '../../services/beranda.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carousels: any;
  constructor(private carouselsData: BerandaService) {
    this.carouselsData.getCarousel().subscribe((res: any) => {
      this.carousels = res.data;
      console.warn(res);
    });
  }

  @Input() carousel: any[] = [];
  @Input() controls: boolean = true;
  @Input() indicators: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 10000;

  selectedIndex = 0;

  ngOnInit() {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  autoSlideImages(): void {
    setInterval(() => {
      if (this.selectedIndex === this.carousel.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onImageClick(index: number): void {
  }

}

