import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaComponent } from './beranda.component';

describe('BerandaComponent', () => {
  let component: BerandaComponent;
  let fixture: ComponentFixture<BerandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
