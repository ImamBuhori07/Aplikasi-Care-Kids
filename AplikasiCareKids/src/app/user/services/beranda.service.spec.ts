import { TestBed } from '@angular/core/testing';

import { BerandaService } from './beranda.service';

describe('BerandaService', () => {
  let service: BerandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
