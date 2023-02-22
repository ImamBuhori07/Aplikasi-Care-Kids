import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinganComponent } from './postingan.component';

describe('PostinganComponent', () => {
  let component: PostinganComponent;
  let fixture: ComponentFixture<PostinganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostinganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostinganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
